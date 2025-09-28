// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware((auth, req) => {
  const { pathname } = req.nextUrl;

  // Allowlist: the coming-soon page itself, the unlock API, and common static stuff
  const isAllowedPath =
    pathname.startsWith("/coming-soon") ||
    pathname.startsWith("/api/unlock") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/favicon") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    // static file extensions
    /\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)$/.test(
      pathname
    );

  if (isAllowedPath) {
    return NextResponse.next();
  }

  // Check the access cookie set by /api/unlock
  const hasAccess = req.cookies.get("site_access")?.value === "granted";
  if (hasAccess) {
    return NextResponse.next();
  }

  // Otherwise, gate the site by rewriting to /coming-soon (URL bar stays on original path)
  const url = req.nextUrl.clone();
  url.pathname = "/coming-soon";
  return NextResponse.rewrite(url);
});

// Keep your original matcher (runs on most routes + all API routes)
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
