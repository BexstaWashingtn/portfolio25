import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hasFreeEntry = url.searchParams.has("freeentry");

  if (!hasFreeEntry && url.pathname === "/") {
    const redirectUrl = url.clone();
    redirectUrl.pathname = "/locked";
    redirectUrl.search = "";
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"], // Apply middleware only to the root path

  // You can add more paths if needed, e.g., "/about", "/contact", etc.
};
