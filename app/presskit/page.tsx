"use client";

import Link from "next/link";

export default function PressKitPage() {
  return (
    <div className="bg-gradient-to-b from-black via-[#0b0b0b] to-gray-900 text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-16">
        <h1 className="text-5xl font-extrabold uppercase text-indigo-400 tracking-wide mb-4">
          PressKit
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
          Welcome to the official NeximusAI PressKit page. Below you’ll find
          brand resources and general studio information. While we’re not
          revealing project-specific details, we’re excited to offer a glimpse
          into our vision and ethos. For interviews, additional assets, or
          partnership opportunities, please reach out via our contact form.
        </p>

        {/* Branding / Assets */}
        <div className="bg-black/60 p-6 rounded-xl shadow-md border border-gray-800 mb-12">
          <h2 className="text-3xl font-bold text-indigo-300 mb-4 uppercase tracking-wide">
            Studio Brand & Assets
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            We offer high-resolution versions of our logo and official brand
            colors for use in articles, press releases, or promotional materials
            that reference NeximusAI. Please see our style guidelines below for
            instructions on correct usage.
          </p>
          {/* Example Buttons / Links */}
          <div className="space-x-4">
            <Link
              href="/assets/NeximusAI_Logo.png"
              className="inline-block px-6 py-2 font-bold text-white 
                bg-indigo-600 hover:bg-indigo-500 uppercase tracking-wide 
                rounded-sm transform hover:-translate-y-0.5 transition
                "
              download
            >
              Download Logo
            </Link>
            <Link
              href="/contact"
              className="inline-block px-6 py-2 font-bold text-white 
                bg-gray-700 hover:bg-gray-600 uppercase tracking-wide 
                rounded-sm transform hover:-translate-y-0.5 transition
                "
            >
              Request Additional Assets
            </Link>
          </div>
        </div>

        {/* Studio Info */}
        <div className="bg-black/60 p-6 rounded-xl shadow-md border border-gray-800">
          <h2 className="text-3xl font-bold text-indigo-300 mb-4 uppercase tracking-wide">
            Studio Info
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            NeximusAI is an AI-focused studio combining advanced tech with
            imaginative design. We’re forging new frontiers in interactive
            entertainment without revealing specific storylines or gameplay
            elements. Our approach emphasizes adaptation, collaboration, and
            forward-thinking experimentation.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            For media inquiries, interviews, or partnership proposals, please
            contact us at:
          </p>
          <p className="text-pink-400 text-lg font-semibold my-3">
            info@neximus.ai
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            We look forward to building a future where AI amplifies creativity
            and engagement in every experience we craft.
          </p>
        </div>
      </section>
    </div>
  );
}
