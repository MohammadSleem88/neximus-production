"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#d9eaf0] via-[#eaf3ed] to-[#cbe3d7] text-gray-700 overflow-x-hidden">
      {/* Header / Navigation */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4">
        {/* Logo / Brand Name */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full border border-gray-400 flex items-center justify-center">
            {/* Minimal Circle Icon – replace with an actual logo if desired */}
            <div className="h-3 w-3 rounded-full bg-gray-400" />
          </div>
          <span className="font-semibold">Neximus AI</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:underline">
            About
          </Link>
          <Link href="#anna" className="hover:underline">
            Anna
          </Link>
          <Link href="#welcome" className="hover:underline">
            Features
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </header>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white/70 backdrop-blur-md border-t border-white/50 shadow-sm z-10">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#anna"
                onClick={() => setMenuOpen(false)}
                className="block hover:underline"
              >
                Anna
              </Link>
            </li>
            <li>
              <Link
                href="#welcome"
                onClick={() => setMenuOpen(false)}
                className="block hover:underline"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Contact Form Section */}
      <div className="flex items-center justify-center px-4 mt-16">
        <div className="max-w-lg w-full bg-white/70 backdrop-blur-md border border-white/50 rounded-md shadow-md p-6">
          <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
          <p className="mb-6 text-gray-600">
            We’d love to hear from you! Fill out the form below, and we’ll get
            back to you as soon as possible.
          </p>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="inline-block w-full rounded-full bg-gray-800 px-4 py-2 text-white hover:bg-gray-700 transition-transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
