"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  // If Clerk isn't loaded yet, don't show anything (or show a spinner)
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Loading user...</p>
      </div>
    );
  }

  // If user is loaded but null, they're signed out => redirect to sign-in
  if (!user) {
    useEffect(() => {
      router.push("/sign-in");
    }, [router]);

    // Return nothing (or a loading screen) while we redirect
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Redirecting to sign in...</p>
      </div>
    );
  }

  // If we want a role check for the entire dashboard:
  // if (user.publicMetadata.role !== "admin") {
  //   useEffect(() => {
  //     router.push("/");
  //   }, [router]);
  //   return null;
  // }

  // Otherwise, render the actual dashboard layout
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-4 border-r border-gray-800">
        <h2 className="text-xl font-bold mb-4 uppercase">Dashboard</h2>
        <nav className="space-y-2">
          <a href="/dashboard" className="block hover:text-pink-400 transition">
            Home
          </a>
          <a
            href="/dashboard/admin"
            className="block hover:text-pink-400 transition"
          >
            Admin
          </a>
          <a
            href="/dashboard/team"
            className="block hover:text-pink-400 transition"
          >
            Team
          </a>
          <a
            href="/dashboard/billing"
            className="block hover:text-pink-400 transition"
          >
            Billing
          </a>
          <a
            href="/dashboard/shop"
            className="block hover:text-pink-400 transition"
          >
            Shop
          </a>
          {/* etc. */}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
