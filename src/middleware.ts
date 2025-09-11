import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// TODO: remove param after freeentry, set Session freeentry for other Links

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
  matcher: ["/"],
};
