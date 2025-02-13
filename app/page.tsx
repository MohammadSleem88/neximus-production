"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { SVGProps } from "react";

/* 
  Simple SVG components for Discord & YouTube.
  Replace with your own icons if you prefer.
*/
function DiscordIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.0371c-1.4195.3413-2.8152.8305-4.1151 1.5152a.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c1.7308 1.2785 3.4153 2.0564 5.0651 2.5819a.0777.0777 0 00.0842-.0276c.3978-.54.7518-1.1157 1.053-1.7237a.076.076 0 00-.0416-.1c-.5778-.2195-1.1284-.4953-1.6377-.8123a.076.076 0 01-.0076-.1277c.1098-.0824.2195-.1686.3242-.259.4648-.44.9306-.9098 1.348-.1.0636-.1014.1192-.2076.1705-.3162.3963-.7922.8467-1.5458 1.348-2.2356.0079-.011 4.4726 2.0171 4.5137 2.0348a.0702.0702 0 00.0636 0c.041-.0176 4.5069-2.0458 4.5137-2.0348.5013.6898.9517 1.4434 1.348 2.2356.0389.0794.0804.1578.122.2362.0271.06.057.12.0871.18.0513.1086.1069.2148.1705.3162.4174.81.8832.86 1.348.1.1047.0904.2195.1766.3242.259a.076.076 0 01-.0057.1277c-.51.317-1.0616.5928-1.6394.8123a.076.076 0 00-.0407.1c.302.608.6562 1.1837 1.053 1.7237a.0766.0766 0 00.0842.0276c1.6498-.5255 3.3343-1.3034 5.0651-2.5819a.077.077 0 00.0312-.0561c.5006-5.177-.8382-9.6604-3.5485-13.6605a.061.061 0 00-.031-.028z" />
    </svg>
  );
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.4994 6.1866a2.9983 2.9983 0 00-2.1162-2.1237C19.0626 3.3333 12 3.3333 12 3.3333s-7.0626 0-9.3832.7296A2.9983 2.9983 0 00.5006 6.1866 31.2964 31.2964 0 000 12a31.2964 31.2964 0 00.5006 5.8134 2.9983 2.9983 0 002.1162 2.1237c2.3206.7296 9.3832.7296 9.3832.7296s7.0626 0 9.3832-.7296a2.9983 2.9983 0 002.1162-2.1237A31.2964 31.2964 0 0024 12a31.2964 31.2964 0 00-.5006-5.8134zM9.6012 15.3471V8.6529l6.4654 3.3471-6.4654 3.3471z" />
    </svg>
  );
}

export default function HomePage() {
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
                Welcome
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

      {/* Hero Section */}
      <main className="relative z-0 flex flex-col items-center justify-center text-center pt-16 pb-20">
        {/* Circle Logo (centered) */}
        <div className="h-20 w-20 rounded-full border border-gray-500 flex items-center justify-center mb-4">
          <div className="h-6 w-6 rounded-full bg-gray-400" />
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">
          Neximus <span className="font-light">AI</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mb-6">
          Endless immersive learning AI games
        </p>

        {/* Begin Button */}
        <Link
          href="#anna"
          className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-transform hover:scale-105"
        >
          begin
        </Link>
      </main>

      {/* About Section */}
      <section
        id="about"
        className="relative z-10 mx-auto mt-24 mb-12 max-w-3xl px-6"
      >
        <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-md shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">About Neximus AI</h2>
          <p className="leading-relaxed text-gray-700">
            Neximus AI is dedicated to providing a soothing yet futuristic
            experience—one that merges advanced machine learning with tranquil
            landscapes. Inspired by the calm pace of slow drives and minimal
            design, we strive to deliver an endless, meditative world powered by
            cutting-edge AI.
          </p>
        </div>
      </section>

      {/* Anna Game Section */}
      <section id="anna" className="relative z-10 mx-auto my-12 max-w-3xl px-6">
        <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-md shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Anna: An Immersive New World
          </h2>
          {/* Aspect Ratio Container */}
          <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden rounded-md">
            <Image
              src="/Anna.png"
              alt="Anna Game Artwork"
              fill
              className="object-cover object-center"
            />
          </div>
          <p className="text-gray-700 mb-4">
            Step into a realm where each moment is shaped by AI-driven
            storytelling. Anna offers a serene environment with gentle
            challenges and evolving scenery, perfect for players seeking a calm
            yet ever-changing escape.
          </p>
          <Link
            href="/games/anna"
            className="inline-block px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Welcome / Changelog Section */}
      <section
        id="welcome"
        className="relative z-10 mx-auto my-12 max-w-3xl px-6"
      >
        <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-md shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to Neximus 2.0</h2>
          <p className="text-gray-700 mb-4">
            We’ve reimagined our entire engine for a smoother, more relaxing
            journey. Each update refines performance, visuals, and AI behaviors
            to create the ultimate immersive learning experience.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Improved performance and reduced load times</li>
            <li>Revamped lighting and texture systems</li>
            <li>New AI-driven environments that adapt to your pace</li>
            <li>Mobile support for on-the-go relaxation</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 mx-auto my-12 max-w-3xl px-6"
      >
        <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-md shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            Have questions, feedback, or want to collaborate? We’d love to hear
            from you. Reach out and join our growing community of AI explorers.
          </p>
          <Link
            href="/contact"
            className="inline-block px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer (Full Width) */}
      <footer className="relative z-10 w-full bg-white/70 backdrop-blur-md border-t border-white/50 shadow-md px-4 pt-6 pb-4">
        {/* Social Icons Row */}
        <div className="flex justify-center space-x-6 mb-4">
          {/* Discord Icon */}
          <Link
            href="https://discord.gg/"
            aria-label="Discord"
            className="text-gray-700 hover:text-gray-900 hover:scale-110 transition-transform"
          >
            <DiscordIcon className="h-6 w-6" />
          </Link>
          {/* YouTube Icon */}
          <Link
            href="https://youtube.com/"
            aria-label="YouTube"
            className="text-gray-700 hover:text-gray-900 hover:scale-110 transition-transform"
          >
            <YoutubeIcon className="h-6 w-6" />
          </Link>
        </div>

        {/* Bottom Links (Discord, About, Wishlist) */}
        <div className="flex justify-center space-x-6 mb-2 text-sm text-gray-600">
          <Link href="https://discord.gg/" className="hover:underline">
            Join the Discord
          </Link>
          <Link href="#about" className="hover:underline">
            About
          </Link>
          <Link href="#wishlist" className="hover:underline">
            Wishlist on Steam
          </Link>
        </div>

        {/* Copyright & Legal */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Neximus AI. All rights reserved.
          </p>
          <div className="space-x-4 mt-2 text-sm">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/terms" className="hover:underline">
              Refund Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
