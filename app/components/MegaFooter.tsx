// app/components/MegaFooter.tsx
"use client";

import Link from "next/link";
import { FaDiscord, FaYoutube, FaTwitch, FaSteam } from "react-icons/fa";

export default function MegaFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-12 px-4 md:px-8 text-white border-t border-white/10 mt-16">
      {/* Background treatment */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-950/20 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        {/* Top divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              NeximusAI
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building the future of AI-driven gaming experiences that connect
              humanity across cultures.
            </p>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-purple-300 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-purple-300 transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/presskit"
                  className="text-gray-400 hover:text-purple-300 transition-colors text-sm"
                >
                  Press Kit
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-purple-300 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Games */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Games</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/game#living-worlds"
                  className="text-gray-400 hover:text-purple-300 transition-colors text-sm"
                >
                  Living Worlds
                </Link>
              </li>
              <li>
                <Link
                  href="/game#the-vault"
                  className="text-gray-400 hover:text-purple-300 transition-colors text-sm"
                >
                  The Vault
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-gray-400 hover:text-purple-300 transition-colors text-sm"
                >
                  Coming Soon
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-purple-500/30 flex items-center justify-center transition-colors"
              >
                <FaDiscord className="w-5 h-5 text-gray-300" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-purple-500/30 flex items-center justify-center transition-colors"
              >
                <FaYoutube className="w-5 h-5 text-gray-300" />
              </a>
              <a
                href="https://www.twitch.tv/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitch"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-purple-500/30 flex items-center justify-center transition-colors"
              >
                <FaTwitch className="w-5 h-5 text-gray-300" />
              </a>
              <a
                href="https://store.steampowered.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Steam"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-purple-500/30 flex items-center justify-center transition-colors"
              >
                <FaSteam className="w-5 h-5 text-gray-300" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Join our community for exclusive updates.
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {year} NeximusAI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-purple-300 text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-purple-300 text-xs transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-500 hover:text-purple-300 text-xs transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
