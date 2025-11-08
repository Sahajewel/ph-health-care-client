import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";

type UserRole = "ADMIN" | "PATIENT" | "DOCTOR";
type RouteConfig = {
  exact: string[];
  patterns: RegExp[];
};

const authRoutes = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
];

const commonProtectedRoutes: RouteConfig = {
  exact: ["/profile", "/settings"],
  patterns: [],
};

const doctorProtectedRoutes: RouteConfig = {
  patterns: [/^\/doctor/],
  exact: [],
};

const adminProtectedRoutes: RouteConfig = {
  patterns: [/^\/admin/],
  exact: [],
};

const patientProtectedRoutes: RouteConfig = {
  patterns: [/^\/dashboard/],
  exact: [],
};

const isAuthRoutes = (pathname: string) => {
  return authRoutes.some((route) => route === pathname);
};

const isRouteMatches = (
  pathname: string,
  routeConfig: RouteConfig
): boolean => {
  if (routeConfig.exact.includes(pathname)) {
    return true;
  }
  return routeConfig.patterns.some((pattern: RegExp) => pattern.test(pathname));
};
const getRouteOwner = (
  pathname: string
): "ADMIN" | "DOCTOR" | "PATIENT" | "COMMON" | null => {
  if (isRouteMatches(pathname, adminProtectedRoutes)) {
    return "ADMIN";
  }
  if (isRouteMatches(pathname, doctorProtectedRoutes)) {
    return "DOCTOR";
  }
  if (isRouteMatches(pathname, patientProtectedRoutes)) {
    return "PATIENT";
  }
  if (isRouteMatches(pathname, commonProtectedRoutes)) {
    return "COMMON";
  }
  return null;
};

const getDefaultDashboardRoute = (role: UserRole): string => {
  switch (role) {
    case "ADMIN":
      return "/admin/dashboard";
    case "DOCTOR":
      return "/doctor/dashboard";
    case "PATIENT":
      return "/dashboard";
    default:
      return "/";
  }
};
// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const cookieStore = await cookies();
  const accessToken = request.cookies.get("accessToken")?.value || null;

  let userRole: UserRole | null = null;
  if (accessToken) {
    const verifiedToken: JwtPayload | string = jwt.verify(
      accessToken,
      process.env.JWT_SECRET as string
    );
    if (typeof verifiedToken === "string") {
      cookieStore.delete("accessToken");
      cookieStore.delete("refreshToken");
      return NextResponse.redirect(new URL("/login", request.url));
    }
    userRole = verifiedToken.role;
  }

  const routerOwner = getRouteOwner(pathname);
  const isAuth = isAuthRoutes(pathname);

  if (accessToken && isAuth) {
    return NextResponse.redirect(
      new URL(getDefaultDashboardRoute(userRole as UserRole), request.url)
    );
  }
  if (routerOwner === null) {
    return NextResponse.next();
  }
  if (routerOwner === "COMMON") {
    if (!accessToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
