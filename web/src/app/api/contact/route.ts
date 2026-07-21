import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";
import { z } from "zod";
import { Resend } from "resend";

const MAX_BODY_SIZE = 16 * 1024;
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

export async function POST(request: Request) {
  const requestId = crypto.randomUUID();
  const rateLimit = checkRateLimit(getClientIp(request));

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        success: false,
        code: "RATE_LIMITED",
        message:
          "Zu viele Anfragen. Bitte versuche es in einigen Minuten erneut.",
        requestId,
      },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      },
    );
  }

  try {
    const body = await readRequestBody(request);

    if (body === null) {
      return NextResponse.json(
        {
          success: false,
          code: "PAYLOAD_TOO_LARGE",
          message: "Die übermittelten Formulardaten sind zu groß.",
          requestId,
        },
        { status: 413 },
      );
    }

    let data: unknown;

    try {
      data = JSON.parse(body);
    } catch {
      return NextResponse.json(
        {
          success: false,
          code: "INVALID_JSON",
          message: "Die Formulardaten konnten nicht gelesen werden.",
          requestId,
        },
        { status: 400 },
      );
    }

    const result = contactFormSchema.safeParse(data);

    if (!result.success) {
      const flattened = z.flattenError(result.error);

      return NextResponse.json(
        {
          success: false,
          code: "VALIDATION_ERROR",
          errors: flattened.fieldErrors,
          message: "Bitte überprüfe deine Eingaben.",
          requestId,
        },
        { status: 400 },
      );
    }

    const { hpot } = result.data;

    if (hpot?.trim()) {
      return NextResponse.json({
        success: true,
        message: "Formular erfolgreich gesendet",
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL;

    if (!apiKey || !recipientEmail) {
      console.error(`[${requestId}] Kontaktformular ist nicht konfiguriert.`);

      return NextResponse.json(
        {
          success: false,
          code: "SERVICE_UNAVAILABLE",
          message:
            "Der Mailversand ist derzeit nicht verfügbar. Bitte versuche es später erneut.",
          requestId,
        },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ??
        "Kontaktformular <onboarding@resend.dev>",
      to: recipientEmail,
      subject: `Kontaktanfrage von ${result.data.name}`,
      replyTo: result.data.email,
      text: `
Es ist eine neue Kontaktanfrage eingegangen:

Name: ${result.data.name}
E-Mail: ${result.data.email}

Nachricht:
${result.data.message}
      `.trim(),
    });

    if (error) {
      console.error(`[${requestId}] Resend-Fehler:`, error);

      return NextResponse.json(
        {
          success: false,
          code: "EMAIL_DELIVERY_FAILED",
          message:
            "Die Nachricht konnte nicht versendet werden. Bitte versuche es später erneut.",
          requestId,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Formular erfolgreich gesendet",
    });
  } catch (error) {
    console.error(`[${requestId}] Unerwarteter Kontaktformularfehler:`, error);

    return NextResponse.json(
      {
        success: false,
        code: "INTERNAL_SERVER_ERROR",
        message:
          "Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es später erneut.",
        requestId,
      },
      { status: 500 },
    );
  }
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");

  return (
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function checkRateLimit(ip: string): {
  allowed: boolean;
  retryAfterSeconds: number;
} {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });

    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((current.resetAt - now) / 1000),
    };
  }

  current.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

async function readRequestBody(request: Request): Promise<string | null> {
  const contentLength = Number(request.headers.get("content-length"));

  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_SIZE) {
    return null;
  }

  if (!request.body) {
    return "";
  }

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let receivedBytes = 0;

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    receivedBytes += value.byteLength;

    if (receivedBytes > MAX_BODY_SIZE) {
      await reader.cancel();
      return null;
    }

    chunks.push(value);
  }

  const body = new Uint8Array(receivedBytes);
  let offset = 0;

  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return new TextDecoder().decode(body);
}
