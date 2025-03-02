"use client";

import Link from "next/link";
// 1) Import the icons from react-icons (choose whichever suits your brand)
import { FaDiscord, FaYoutube, FaTwitch, FaSteam } from "react-icons/fa";

export default function MegaFooter() {
  return (
    <footer className="bg-black pt-16 pb-12 px-6 sm:px-8 text-white border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Column 1: Brand & Summary */}
          <div>
            <h4 className="text-xl font-bold mb-4">NeximusAI</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              an AI-driven language learning game platform that provides
              personalized, immersive, engaging, and fun language acquisition
              experiences​​​​.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/about" className="hover:text-pink-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/game" className="hover:text-pink-400">
                  Game
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-pink-400">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Community & Support */}
          <div>
            <h4 className="text-xl font-bold mb-4">Community</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/careers" className="hover:text-pink-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-pink-400">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-pink-400">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/presskit" className="hover:text-pink-400">
                  PressKit
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/contact" className="hover:text-pink-400">
                  Contact Us
                </Link>
              </li>
              <li>info@neximus.ai</li>
              <li>+1 (800) 123-4567</li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
          {/* Left: Copyright */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NeximusAI. All rights reserved.
          </p>

          {/* Middle: Social Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="https://discord.com"
              className="text-gray-500 hover:text-pink-400 transition-colors"
              aria-label="Discord"
            >
              <FaDiscord className="w-5 h-5" />
            </Link>
            <Link
              href="https://youtube.com"
              className="text-gray-500 hover:text-pink-400 transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.twitch.tv/"
              className="text-gray-500 hover:text-pink-400 transition-colors"
              aria-label="Twitch"
            >
              <FaTwitch className="w-5 h-5" />
            </Link>
            <Link
              href="https://store.steampowered.com/"
              className="text-gray-500 hover:text-pink-400 transition-colors"
              aria-label="Steam"
            >
              <FaSteam className="w-5 h-5" />
            </Link>
          </div>

          {/* Right: Policies (No Refund) */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-pink-400 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-pink-400 text-sm transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
