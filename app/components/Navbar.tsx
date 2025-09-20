// app/components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, useUser, SignOutButton } from "@clerk/nextjs";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Game", href: "/game" },
  { label: "Partners", href: "/partners" },
  { label: "Careers", href: "/careers" },
  { label: "PressKit", href: "/presskit" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const MenuIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
    />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden>
    <path stroke="currentColor" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const router = useRouter();
  const { user } = useUser();
  const avatarUrl = user?.imageUrl || "/placeholder.png";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Primary"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            aria-label="NeximusAI"
          >
            <span className="text-2xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
              NeximusAI
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="relative font-semibold text-white/90 uppercase text-sm tracking-wider transition-colors hover:text-pink-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-400 after:transition-all hover:after:w-full"
              >
                {label}
              </Link>
            ))}

            <SignedOut>
              <div className="flex items-center gap-3">
                <Link
                  href="/sign-in"
                  className="px-4 py-2 font-bold text-white bg-white/10 border border-white/20 rounded-md hover:bg-white/15 transition"
                >
                  Login
                </Link>
                <Link
                  href="/sign-up"
                  className="px-4 py-2 font-bold text-white rounded-md bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 transition"
                >
                  Sign Up
                </Link>
              </div>
            </SignedOut>

            <SignedIn>
              {user && (
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowDropdown((s) => !s)}
                    className="rounded-full border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400/40"
                    aria-haspopup="menu"
                    aria-expanded={showDropdown}
                  >
                    <img
                      src={avatarUrl}
                      alt="Profile"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </button>

                  {showDropdown && (
                    <div
                      role="menu"
                      className="absolute right-0 mt-2 w-44 bg-black/80 backdrop-blur-xl border border-white/10 rounded-md shadow-xl"
                    >
                      <button
                        role="menuitem"
                        className="w-full text-left px-4 py-2 text-sm text-white/90 hover:bg-white/10"
                        onClick={() => {
                          setShowDropdown(false);
                          router.push("/dashboard");
                        }}
                      >
                        Dashboard
                      </button>
                      <SignOutButton>
                        <button
                          role="menuitem"
                          className="w-full text-left px-4 py-2 text-sm text-white/90 hover:bg-white/10"
                          onClick={() => setShowDropdown(false)}
                        >
                          Sign Out
                        </button>
                      </SignOutButton>
                    </div>
                  )}
                </div>
              )}
            </SignedIn>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((o) => !o)}
            className="md:hidden p-2 rounded-md text-white border border-white/20 hover:border-pink-400 transition"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl text-white px-4 py-4">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider hover:text-pink-400 transition"
              >
                {label}
              </Link>
            ))}

            <SignedOut>
              <div className="flex items-center gap-3 pt-2">
                <Link
                  href="/sign-in"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 font-bold text-white bg-white/10 border border-white/20 rounded-md hover:bg-white/15 transition"
                >
                  Login
                </Link>
                <Link
                  href="/sign-up"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 font-bold text-white rounded-md bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 transition"
                >
                  Sign Up
                </Link>
              </div>
            </SignedOut>

            <SignedIn>
              {user && (
                <button
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:text-pink-400 transition"
                  onClick={() => {
                    setIsOpen(false);
                    router.push("/dashboard");
                  }}
                >
                  Go to Dashboard
                </button>
              )}
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
}
