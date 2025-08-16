import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// Use matcher to protect routes and exclude public assets/pages
export const config = {
  matcher: [
    /*
     * Protect all routes except:
     * - sign-in / sign-up
     * - API webhooks (if needed)
     * - static assets
     */
    "/((?!sign-in|sign-up|api/webhook|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp)).*)",
  ],
};
