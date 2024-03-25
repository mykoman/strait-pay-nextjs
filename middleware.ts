import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (token && !request.nextUrl.pathname.startsWith("/todos")) {
    return Response.redirect(new URL("/todos", request.url));
  }

  if (!token && !request.nextUrl.pathname.startsWith("/sign")) {
    return Response.redirect(new URL("/sign-in", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
