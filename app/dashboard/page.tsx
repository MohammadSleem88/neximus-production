"use client";

import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { user } = useUser();
  const router = useRouter();

  // Optionally do a redirect if not signed in
  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
    }
  }, [user, router]);

  return (
    <>
      <SignedOut>
        {/* If somehow they land here while signed out */}
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <p>Redirecting to sign in...</p>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="min-h-screen bg-black text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-16">
            <h1 className="text-4xl font-extrabold text-pink-500 uppercase mb-6">
              Dashboard
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Welcome to your personal dashboard,{" "}
              <span className="text-pink-400 font-bold">
                {user?.username || user?.firstName || "Adventurer"}
              </span>
              !
            </p>

            <div className="bg-black/60 p-6 rounded-xl shadow-md border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-pink-300 mb-3 uppercase tracking-wide">
                Quick Links
              </h2>
              <ul className="space-y-2 text-gray-300 text-base">
                <li>
                  <a
                    href="/dashboard/account"
                    className="hover:text-pink-400 transition"
                  >
                    Manage Account
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard/billing"
                    className="hover:text-pink-400 transition"
                  >
                    Billing
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard/shop"
                    className="hover:text-pink-400 transition"
                  >
                    Shop
                  </a>
                </li>
                {/* etc. */}
              </ul>
            </div>

            {/* Example grid of future features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/60 p-6 rounded-xl shadow-md border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-3 uppercase">
                  AI Insights
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Explore data-driven recommendations, track your progress, and
                  unlock advanced features.
                </p>
              </div>
              <div className="bg-black/60 p-6 rounded-xl shadow-md border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-3 uppercase">
                  Team Collaboration
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  If you’re part of our dev or admin team, you can access
                  internal tools and game-building features from here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SignedIn>
    </>
  );
}
