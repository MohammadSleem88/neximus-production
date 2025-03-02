"use client";

import { useState } from "react";
import Link from "next/link";

export default function GamePage() {
  // For demonstration, a simple “countdown” or “placeholder” state might be here
  // to show how you could expand the page with interactive or dynamic elements in the future.

  return (
    <div className="bg-gradient-to-b from-black via-[#0b0b0b] to-gray-900 text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-16">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold uppercase text-purple-400 tracking-wider mb-4">
          Something Incredible Is Coming
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
          Welcome to the threshold of a revolutionary AI-driven experience that
          merges immersive gaming with the art of language learning. We’re
          constructing vibrant, living villages from different corners of the
          world, where each alley and rooftop hides a new linguistic adventure.
          Although we’re not ready to spill every secret, we promise a journey
          that reimagines how players interact, learn, and grow.
        </p>

        {/* Futuristic Teaser Section */}
        <div className="bg-black/60 p-6 rounded-xl shadow-md border border-gray-800 mb-12">
          <h2 className="text-3xl font-bold text-pink-300 mb-3 uppercase tracking-wide">
            A Fusion of Culture & AI
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Envision strolling through meticulously recreated villages—each one
            capturing the essence of real-world architecture and local customs.
            Speak to AI-powered locals who not only greet you, but also help you
            acquire language skills in authentic, dynamic conversations. No
            script. No forced dialogues. Every interaction is unique, shaped by
            neural networks that adapt to your learning pace.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            As you journey across these diverse landscapes, you’ll experience
            the thrill of discovery while honing new language skills. Our
            advanced AI ensures no two visits are the same, so every challenge,
            every chat, and every quest fosters deeper cultural understanding—
            all without revealing the true extent of what awaits you.
          </p>
        </div>

        {/* Mysterious “Villages” Teaser */}
        <div className="mb-12">
          <h3 className="text-2xl font-extrabold text-pink-500 uppercase tracking-wide mb-4">
            Glimpses of the World
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            From a quiet lakeside town to a bustling desert oasis—each location
            is an ever-evolving mosaic of daily life, shaped by AI that mimics
            regional expressions, customs, and rhythms. Dive into local
            conversations, pick up colloquialisms, and forge friendships with
            in-game residents who truly “live” in these digital realms.
          </p>
        </div>

        {/* CTA / Beta Sign-up */}
        <div className="bg-black/60 p-6 rounded-xl shadow-md border border-gray-800">
          <h2 className="text-3xl font-bold text-indigo-400 mb-3 uppercase tracking-wide">
            Be the First to Know
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Ready to step into a future where language barriers dissolve in an
            immersive playground of AI-driven storytelling? Drop your email and
            be among the first to experience our bold new world as we reveal
            more in the coming months.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 font-bold text-white 
                bg-pink-600 hover:bg-pink-500 uppercase tracking-wide 
                rounded-sm transform hover:-translate-y-0.5 transition mb-3 sm:mb-0
              "
            >
              Sign Up for Updates
            </Link>
            <Link
              href="/about"
              className="inline-block px-6 py-3 font-bold text-white 
                bg-gray-700 hover:bg-gray-600 uppercase tracking-wide 
                rounded-sm transform hover:-translate-y-0.5 transition
              "
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
