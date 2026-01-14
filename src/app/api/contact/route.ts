import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const result = contactFormSchema.safeParse(data);

    if (!result.success) {
      const flattened = z.flattenError(result.error);

      return NextResponse.json(
        {
          success: false,
          errors: flattened.fieldErrors,
          message: "Validierungsfehler",
        },
        { status: 400 }
      );
    }

    const { hpot } = result.data;

    if (hpot && hpot.trim() !== "") {
      return NextResponse.json(
        {
          success: true,
          message: "Formular erfolgreich gesendet",
        },
        {
          status: 200,
        }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY fehlt in .env.local");
      return NextResponse.json(
        {
          success: false,
          message:
            "Mailversand ist aktuell nicht verfügbar (Konfigurationsfehler).",
        },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ??
        "Kontaktformular <onboarding@resend.dev>",
      to: process.env.CONTACT_RECIPIENT_EMAIL!,
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

    return NextResponse.json({
      success: true,
      message: "Formular erfolgreich gesendet",
    });
  } catch (error) {
    console.error("API /contact error: ", error);
    return NextResponse.json(
      {
        success: false,
        message: "Serverfehler. Bitte später erneut versuchen.",
      },
      { status: 500 }
    );
  }
}
