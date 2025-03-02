"use client";

import { useState } from "react";
import Link from "next/link";

// We'll remove references to `isDarkMode` and `setIsDarkMode`
// since the toggle is commented out. The code compiles fine
// without them, as we're not using them now.

// Example links (with "News" added)
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Game", href: "/game" },
  { label: "Careers", href: "/careers" },
  { label: "PressKit", href: "/presskit" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

// Icons for mobile menu
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
  const [isOpen, setIsOpen] = useState(false);

  // Comment out the dark mode code
  /*
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  */

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

          {/* Desktop Nav */}
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

            {/* Login / Sign Up Buttons */}
            <div className="flex items-center space-x-4">
              {/* LOGIN: darker, more neutral */}
              <Link
                href="/login"
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

              {/* SIGN UP: pink/purple gradient */}
              <Link
                href="/signup"
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

              {/* 
                Dark/Light Toggle: Pill Switch (Commented Out)
              <div
                onClick={toggleDarkMode}
                className="
                  relative w-14 h-7 flex items-center 
                  border border-gray-600
                  rounded-full
                  p-1
                  cursor-pointer
                  bg-gray-300 dark:bg-blue-700
                  transform hover:-translate-y-0.5
                  transition
                "
              >
                <div
                  className={\`
                    w-5 h-5 rounded-full transition-all
                    \${isDarkMode ? "translate-x-7 bg-blue-400" : "translate-x-0 bg-gray-500"}
                  \`}
                />
              </div>
              */}
            </div>
          </div>

          {/* Mobile menu toggle */}
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

      {/* Mobile Nav */}
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

            {/* Login / Sign Up (mobile) */}
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
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
                href="/signup"
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

            {/* 
              Dark/Light Toggle: Pill Switch (Commented Out)
            <div
              onClick={() => {
                toggleDarkMode();
                setIsOpen(false);
              }}
              className="
                relative w-14 h-7 flex items-center 
                border border-gray-600
                rounded-full
                p-1
                cursor-pointer
                bg-gray-300 dark:bg-blue-700
                transform hover:-translate-y-0.5
                transition
              "
            >
              <div
                className={\`
                  w-5 h-5 rounded-full transition-all
                  \${isDarkMode ? "translate-x-7 bg-blue-400" : "translate-x-0 bg-gray-500"}
                \`}
              />
            </div>
            */}
          </div>
        </div>
      )}
    </nav>
  );
}
