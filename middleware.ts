import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "www.rareplantatlas.com";
const APEX_HOST = "rareplantatlas.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const url = request.nextUrl.clone();

  let shouldRedirect = false;

  if (host === APEX_HOST) {
    url.host = CANONICAL_HOST;
    shouldRedirect = true;
  }

  if (forwardedProto === "http") {
    url.protocol = "https:";
    shouldRedirect = true;
  }

  if (!shouldRedirect) {
    return NextResponse.next();
  }

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|robots.txt|sitemap.xml).*)",
  ],
};
