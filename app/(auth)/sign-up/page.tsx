// app/(auth)/sign-up/page.tsx
"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <SignUp
        routing="hash"
        signInUrl="/sign-in"
        appearance={{ variables: { colorPrimary: "#ec4899" } }}
      />
    </div>
  );
}
