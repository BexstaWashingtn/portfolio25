import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const secret = process.env.AUTH_SECRET;

  if (!secret) {
    return NextResponse.redirect(new URL("/locked", request.url));
  }

  const url = request.nextUrl;
  if (url.pathname.startsWith("/locked")) {
    return NextResponse.next();
  }

  const secretBytes = Uint8Array.from(atob(secret), (c) => c.charCodeAt(0));
  const hmacKey = await crypto.subtle.importKey(
    "raw",
    secretBytes,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );

  const redirectLocked = () => {
    const toLocked = request.nextUrl.clone();
    toLocked.pathname = "/locked";
    toLocked.search = "";
    return NextResponse.redirect(toLocked);
  };

  // 3) check url Param "freeentry"
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
      })
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

  const [pB64u, sB64u] = raw.split(".");
  if (!pB64u || !sB64u) return redirectLocked();

  const payloadBytes2 = b64urlToBytes(pB64u);
  const sigBytes = b64urlToBytes(sB64u);

  const ok = await crypto.subtle.verify(
    "HMAC",
    hmacKey,
    sigBytes,
    payloadBytes2
  );
  if (!ok) return redirectLocked();

  const payload2 = JSON.parse(new TextDecoder().decode(payloadBytes2));
  if (
    typeof payload2.exp !== "number" ||
    payload2.exp < Math.floor(Date.now() / 1000)
  ) {
    return redirectLocked();
  }

  return NextResponse.next();
}

const b64url = (bytes: ArrayBuffer | Uint8Array) => {
  const bin = String.fromCharCode(...new Uint8Array(bytes as ArrayBuffer));
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
};

const b64urlToBytes = (b64u: string) => {
  const b64 =
    b64u.replace(/-/g, "+").replace(/_/g, "/") +
    "==".slice(0, (4 - (b64u.length % 4)) % 4);
  const bin = atob(b64);
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
};
