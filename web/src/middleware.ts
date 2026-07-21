import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/impressum" || pathname === "/datenschutz") {
    return NextResponse.next();
  }

  const secret = process.env.AUTH_SECRET;

  if (!secret) {
    return NextResponse.redirect(new URL("/locked", request.url));
  }

  // Framework-Assets & Optimizer freigeben
  if (pathname.startsWith("/_next/")) {
    return NextResponse.next();
  }

  // Statische Dateien/Fonts freigeben
  if (
    /\.(?:jpg|jpeg|png|gif|webp|svg|ico|css|js|map|json|txt|xml|woff2?|ttf|otf)$/.test(
      pathname,
    )
  ) {
    return NextResponse.next();
  }

  // Deine offene Seite freigeben
  if (pathname.startsWith("/locked")) {
    return NextResponse.next();
  }

  const secretBytes = Uint8Array.from(atob(secret), (c) => c.charCodeAt(0));
  const hmacKey = await crypto.subtle.importKey(
    "raw",
    secretBytes,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );

  const redirectLocked = (clearAccessCookie = false) => {
    const toLocked = request.nextUrl.clone();
    toLocked.pathname = "/locked";
    toLocked.search = "";
    const response = NextResponse.redirect(toLocked);

    if (clearAccessCookie) {
      response.cookies.delete("freeentry");
    }

    return response;
  };

  // check url Param "freeentry"
  const url = request.nextUrl;
  if (url.searchParams.has("freeentry")) {
    const isHttps = url.protocol === "https:";
    const cookieOptions = {
      httpOnly: true,
      secure: isHttps,
      sameSite: "lax" as const,
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    };

    const now = Math.floor(Date.now() / 1000);
    const payloadBytes = new TextEncoder().encode(
      JSON.stringify({
        iat: now,
        exp: now + 60 * 60 * 24 * 30,
        g: 1,
      }),
    );
    const sig = await crypto.subtle.sign("HMAC", hmacKey, payloadBytes);
    const token = `${b64url(payloadBytes)}.${b64url(sig)}`;

    const clean = url.clone();
    clean.search = "";
    const res = NextResponse.redirect(clean);
    res.cookies.set("freeentry", token, cookieOptions);
    return res;
  }

  // read cookie and verify
  const raw = request.cookies.get("freeentry")?.value;
  if (!raw) return redirectLocked();

  const isValidToken = await verifyAccessToken(raw, hmacKey);

  if (!isValidToken) {
    return redirectLocked(true);
  }

  return NextResponse.next();
}

const b64url = (bytes: ArrayBuffer | Uint8Array) => {
  const bin = String.fromCharCode(...new Uint8Array(bytes as ArrayBuffer));
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
};

const MAX_TOKEN_PART_LENGTH = 2048;

const b64urlToBytes = (b64u: string) => {
  if (
    !b64u ||
    b64u.length > MAX_TOKEN_PART_LENGTH ||
    !/^[A-Za-z0-9_-]+$/.test(b64u)
  ) {
    throw new Error("Invalid base64url value");
  }

  const b64 =
    b64u.replace(/-/g, "+").replace(/_/g, "/") +
    "=".repeat((4 - (b64u.length % 4)) % 4);
  const bin = atob(b64);
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
};

type AccessPayload = {
  iat: number;
  exp: number;
  g: 1;
};

const isValidAccessPayload = (
  value: unknown,
  now: number,
): value is AccessPayload => {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  const payload = value as Record<string, unknown>;

  return (
    typeof payload.iat === "number" &&
    Number.isFinite(payload.iat) &&
    typeof payload.exp === "number" &&
    Number.isFinite(payload.exp) &&
    payload.g === 1 &&
    payload.iat <= now &&
    payload.exp > now
  );
};

export async function verifyAccessToken(
  raw: string,
  hmacKey: CryptoKey,
  now = Math.floor(Date.now() / 1000),
): Promise<boolean> {
  try {
    const parts = raw.split(".");

    if (parts.length !== 2) {
      return false;
    }

    const [payloadBase64, signatureBase64] = parts;
    const payloadBytes = b64urlToBytes(payloadBase64);
    const signatureBytes = b64urlToBytes(signatureBase64);
    const hasValidSignature = await crypto.subtle.verify(
      "HMAC",
      hmacKey,
      signatureBytes,
      payloadBytes,
    );

    if (!hasValidSignature) {
      return false;
    }

    const payload: unknown = JSON.parse(
      new TextDecoder().decode(payloadBytes),
    );

    return isValidAccessPayload(payload, now);
  } catch {
    return false;
  }
}
