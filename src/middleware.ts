import { NextResponse, NextRequest } from "next/server";
import { ROUTE_PATHS } from "./constants/route-path.constants";
import { refresh } from "./app/(auth)/refresh/services/refresh.services";

export async function middleware(request: NextRequest) {
  const next = NextResponse.next();
  const data = JSON.parse(request.cookies.get("auth-storage")?.value || "{}");
  const currentTime = Date.now();

  const pathname = request.nextUrl.pathname;

  if (
    !data.token &&
    pathname !== ROUTE_PATHS.LOGIN &&
    pathname !== ROUTE_PATHS.REGISTER
  ) {
    return NextResponse.redirect(new URL(ROUTE_PATHS.LOGIN, request.url));
  }

  if (+data.tokenExpires - +currentTime < 3 * 60 * 1000 && data.refreshToken) {
    const refreshToken = data.refreshToken;
    const response = await refresh({ refresh_token: refreshToken });
    if (response?.token) {
      data.token = response.token;
      data.tokenExpires = response.tokenExpires;
      data.refreshToken = response.refreshToken;
      next.cookies.set("auth-storage", JSON.stringify(data));
    } else {
      next.cookies.set("auth-storage", "");
      return NextResponse.redirect(new URL(ROUTE_PATHS.LOGIN, request.url));
    }
  }
  return next;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
