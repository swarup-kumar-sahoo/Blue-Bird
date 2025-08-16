import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: [
    "/",
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/mockup-phones.png",
    "/api/webhook(.*)",
  ],
  ignoredRoutes: [
    "/_next/static/(.*)",
    "/_next/image",
    "/favicon.ico",
  ],
});

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
