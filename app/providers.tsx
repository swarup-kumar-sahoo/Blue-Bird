"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // For Clerk redirect handling in App Router
  const returnUrl =
    typeof window !== "undefined" ? window.location.origin + pathname : "";

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      options={{ redirectUrl: returnUrl }}
    >
      {children}
    </ClerkProvider>
  );
}
