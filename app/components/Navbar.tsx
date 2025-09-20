// Update your app/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, useUser, SignOutButton } from "@clerk/nextjs";

// Updated navigation links to include Partners
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
  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
    <path stroke="currentColor" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [showDropdown, setShowDropdown] = useState(false); // avatar dropdown

  const router = useRouter();
  const { user } = useUser();

  // For the avatar image, Clerk often uses `user.imageUrl`.
  const avatarUrl = user?.imageUrl || "/placeholder.png";

  // Toggles the dropdown under the avatar
  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  return (
    <nav
      className={`
        fixed top-0 z-50 w-full border-b border-gray-800
        bg-gradient-to-r from-black via-[#111111] to-black
      `}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* BRAND NAME */}
          <Link href="/" onClick={() => setIsOpen(false)}>
            <div className="cursor-pointer">
              <h1
                className="
                  text-3xl font-extrabold uppercase 
                  bg-gradient-to-r 
                  from-pink-500 via-purple-400 to-indigo-500
                  bg-[length:200%_200%]
                  bg-clip-text text-transparent
                  animate-brandFlow
                  tracking-wide
                "
              >
                NeximusAI
              </h1>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="
                  relative font-semibold text-white uppercase text-sm tracking-wider
                  after:content-[''] after:absolute after:-bottom-1 after:left-0
                  after:w-0 after:h-[2px] after:bg-pink-400
                  after:transition-all after:duration-300
                  hover:after:w-full
                  hover:text-pink-400
                  transform hover:scale-105
                  transition
                "
              >
                {label}
              </Link>
            ))}

            {/* SignedOut => Show Login/Sign Up */}
            <SignedOut>
              <div className="flex items-center space-x-4">
                <Link
                  href="/sign-in"
                  className="
                    px-4 py-2 font-bold text-white 
                    bg-gray-700 
                    hover:bg-gray-600 
                    uppercase tracking-wide 
                    rounded-sm
                    transform hover:-translate-y-0.5
                    transition
                  "
                >
                  Login
                </Link>
                <Link
                  href="/sign-up"
                  className="
                    px-4 py-2 font-bold text-white 
                    bg-gradient-to-r from-pink-600 to-purple-600
                    hover:from-pink-500 hover:to-purple-500
                    uppercase tracking-wide 
                    rounded-sm
                    transform hover:-translate-y-0.5
                    transition
                  "
                >
                  Sign Up
                </Link>
              </div>
            </SignedOut>

            {/* SignedIn => Show avatar + dropdown */}
            <SignedIn>
              {user && (
                <div className="relative">
                  <img
                    src={avatarUrl}
                    alt="Profile"
                    className="
                      w-8 h-8 rounded-full cursor-pointer object-cover 
                      border border-gray-600
                    "
                    onClick={toggleDropdown}
                  />
                  {showDropdown && (
                    <div
                      className="
                        absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 
                        rounded-sm shadow-lg
                      "
                    >
                      <ul className="flex flex-col text-sm text-white">
                        <li
                          className="
                            px-4 py-2 hover:bg-gray-700 
                            cursor-pointer
                          "
                          onClick={() => {
                            setShowDropdown(false);
                            router.push("/dashboard");
                          }}
                        >
                          Dashboard
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                          <SignOutButton>
                            <span onClick={() => setShowDropdown(false)}>
                              Sign Out
                            </span>
                          </SignOutButton>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </SignedIn>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              md:hidden p-2 rounded-sm 
              text-white border border-gray-600
              hover:border-pink-500
              transition
            "
            aria-label="Toggle navigation"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {isOpen && (
        <div
          className="
            md:hidden border-t border-gray-800
            bg-gradient-to-r from-black via-[#111111] to-black
            text-white px-6 py-4
          "
        >
          <div className="flex flex-col space-y-5">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="
                  text-sm font-semibold uppercase tracking-wider
                  hover:text-pink-400
                  transform hover:scale-105
                  transition
                "
              >
                {label}
              </Link>
            ))}

            {/* SignedOut => Show Login / Sign Up (mobile) */}
            <SignedOut>
              <div className="flex items-center space-x-4">
                <Link
                  href="/sign-in"
                  onClick={() => setIsOpen(false)}
                  className="
                    px-4 py-2 font-bold text-white 
                    bg-gray-700 
                    hover:bg-gray-600 
                    uppercase tracking-wide 
                    rounded-sm
                    transform hover:-translate-y-0.5
                    transition
                  "
                >
                  Login
                </Link>
                <Link
                  href="/sign-up"
                  onClick={() => setIsOpen(false)}
                  className="
                    px-4 py-2 font-bold text-white 
                    bg-gradient-to-r from-pink-600 to-purple-600
                    hover:from-pink-500 hover:to-purple-500
                    uppercase tracking-wide 
                    rounded-sm
                    transform hover:-translate-y-0.5
                    transition
                  "
                >
                  Sign Up
                </Link>
              </div>
            </SignedOut>

            {/* SignedIn => Show avatar + dropdown (mobile) */}
            <SignedIn>
              {user && (
                <div className="relative">
                  <img
                    src={avatarUrl}
                    alt="Profile"
                    className="
                      w-8 h-8 rounded-full cursor-pointer object-cover 
                      border border-gray-600
                    "
                    onClick={() => {
                      setShowDropdown(false);
                      setIsOpen(false);
                      router.push("/dashboard");
                    }}
                  />
                </div>
              )}
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
}
