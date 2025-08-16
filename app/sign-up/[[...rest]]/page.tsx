import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-none p-6 sm:p-8">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold">Create your account</h2>
            <p className="text-sm text-slate-500">
              Sign up quickly with Google or email
            </p>
          </div>

          <SignUp
            appearance={{
              elements: {
                headerTitle: { display: "none" },
                card: "rounded-xl shadow-none mx-auto px-4 sm:pr-8",
                footer: { display: "none" },
                footerAction__signIn: { display: "none" },
                formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
              },
            }}
            routing="path"
            path="/sign-up"
            redirectUrl="/dashboard"  
          />

          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-sky-600 font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
