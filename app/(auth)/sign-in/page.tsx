// app/(auth)/sign-in/page.tsx
"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <SignIn
        routing="hash"
        signUpUrl="/sign-up"
        appearance={{ variables: { colorPrimary: "#ec4899" } }} // pink-500, for example
      />
    </div>
  );
}
