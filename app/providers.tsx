"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { usePathname, useSearchParams } from "next/navigation";

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const search = useSearchParams();
  // For Clerk redirect handling in App Router
  const returnUrl = typeof window !== "undefined" ? window.location.origin + pathname : "";

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}
      options={{ redirectUrl: returnUrl }}
    >
      {children}
    </ClerkProvider>
  );
}
