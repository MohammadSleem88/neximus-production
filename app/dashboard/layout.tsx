"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  // Wait until Clerk fully loads the user
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading user...</p>
      </div>
    );
  }

  // If user is loaded but null => not signed in => redirect
  if (!user) {
    useEffect(() => {
      router.push("/sign-in");
    }, [router]);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Redirecting to sign in...</p>
      </div>
    );
  }

  // If user is recognized, render the sidebar + main content
  return (
    <div className="min-h-screen flex">
      {/* SIDEBAR */}
      <aside className="w-64 bg-gradient-to-b from-gray-900 to-black p-6 border-r border-gray-800">
        <h2 className="text-xl font-extrabold uppercase text-pink-400 tracking-wide mb-4">
          Dashboard
        </h2>
        <nav className="space-y-4 text-sm font-semibold uppercase tracking-wider">
          <a
            href="/dashboard"
            className="block text-gray-300 hover:text-pink-400 transition"
          >
            Home
          </a>
          <a
            href="/dashboard/admin"
            className="block text-gray-300 hover:text-pink-400 transition"
          >
            Admin
          </a>
          <a
            href="/dashboard/team"
            className="block text-gray-300 hover:text-pink-400 transition"
          >
            Team
          </a>
          <a
            href="/dashboard/billing"
            className="block text-gray-300 hover:text-pink-400 transition"
          >
            Billing
          </a>
          <a
            href="/dashboard/shop"
            className="block text-gray-300 hover:text-pink-400 transition"
          >
            Shop
          </a>
          <a
            href="/dashboard/account"
            className="block text-gray-300 hover:text-pink-400 transition"
          >
            Manage Account
          </a>
        </nav>
      </aside>

      {/* MAIN DASHBOARD CONTENT */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
