import { type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const _request = request;

  _request.headers.set("x-current-path", request.nextUrl.pathname);
  _request.headers.set("searchParams", request.nextUrl.searchParams.toString());

  return _request;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
