import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-none p-6 sm:p-8">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold">Welcome back</h2>
            <p className="text-sm text-slate-500">
              Sign in to Blue Bird with your account
            </p>
          </div>

          {/* Clerk's SignIn component */}
          <SignIn
            appearance={{
              elements: {
                headerTitle: { display: "none" }, // hide default "Sign in"
                card: "rounded-xl shadow-none mx-auto px-4 sm:pr-8",
                footer: { display: "none" }, // hide Clerk footer
                footerAction__signUp: { display: "none" }, // hide "Don't have an account?"
                formButtonPrimary:
                  "bg-blue-600 hover:bg-blue-700 text-white", // blue button
              },
            }}
            routing="path"
            path="/sign-in"
            redirectUrl="/dashboard" // ✅ send user to dashboard after login
          />

          {/* Custom link below Clerk form */}
          <div className="mt-4 text-center text-sm">
            New here?{" "}
            <Link href="/sign-up" className="text-sky-600 font-medium">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
