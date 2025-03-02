"use client";

import Link from "next/link";

export default function CareersPage() {
  return (
    <div className="bg-gradient-to-b from-black via-[#0b0b0b] to-gray-900 text-white min-h-screen">
      {/* The Navbar and Footer should already be rendered by your RootLayout 
          in Next.js 15, so this page only needs the main content. 
          If you’re using the Pages router, you can import and place them here. */}

      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-16">
        {/* Page Header */}
        <h1 className="text-5xl font-extrabold text-pink-500 uppercase tracking-wide mb-4">
          Careers
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl leading-relaxed mb-12">
          Join our innovative team at NeximusAI to shape the future of
          interactive experiences! Our startup values creativity, collaboration,
          and cutting-edge research. We focus on delivering engaging AI-driven
          adventures without revealing our in-development project specifics. If
          you’re passionate about pushing boundaries and learning in a dynamic
          environment, come build something incredible with us!
        </p>

        {/* Section: Perks & Culture */}
        <div className="bg-black/60 p-6 rounded-xl shadow-md border border-gray-800 mb-12">
          <h2 className="text-3xl font-bold text-pink-400 mb-4 uppercase tracking-widest">
            Our Culture & Perks
          </h2>
          <ul className="space-y-3 text-gray-300 text-lg leading-relaxed">
            <li>
              <span className="text-pink-300 font-semibold">
                Remote & Flexible:
              </span>{" "}
              We trust you to work when and where you’re most productive.
            </li>
            <li>
              <span className="text-pink-300 font-semibold">
                Continuous Learning:
              </span>{" "}
              We encourage skill development, personal growth, and
              experimentation.
            </li>
            <li>
              <span className="text-pink-300 font-semibold">
                Collaborative Team:
              </span>{" "}
              We value open communication, brainstorming sessions, and shared
              success.
            </li>
            <li>
              <span className="text-pink-300 font-semibold">
                AI Innovation:
              </span>{" "}
              You’ll work at the forefront of AI tech for interactive
              media—without spoiling our future releases.
            </li>
          </ul>
        </div>

        {/* Open Positions */}
        <h2 className="text-4xl font-bold text-indigo-400 mb-8 uppercase tracking-wide">
          Open Roles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pixel Artist Card */}
          <JobCard
            title="Pixel Artist"
            description="Craft evocative pixel art that evokes a sense of nostalgia and wonder. Collaborate with designers and our AI team to integrate art in an innovative workflow, all without revealing project-specific themes."
          />

          {/* Unity Developer Card */}
          <JobCard
            title="Unity Developer"
            description="Build and optimize immersive interactive experiences in Unity. Focus on AI-driven gameplay flows, performance, and user-friendly tools—no direct project leaks needed."
          />

          {/* AI Engineer Card */}
          <JobCard
            title="AI Engineer"
            description="Research and implement cutting-edge AI modules for real-time experiences. Collaborate closely with designers to push the boundaries of adaptive learning, all while safeguarding our unrevealed game details."
          />

          {/* Game Marketing Expert */}
          <JobCard
            title="Game Marketing Expert"
            description="Strategize and execute marketing campaigns that generate excitement—without leaking any spoilers or game specifics. Grow our community, engage with potential players, and build brand credibility."
          />
        </div>
      </section>
    </div>
  );
}

/**
 * Reusable JobCard for each role
 */
function JobCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-black/60 rounded-xl shadow-md border border-gray-800 hover:border-pink-500 transition-colors">
      <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed mb-6">{description}</p>
      <Link
        href="/contact"
        className="inline-block px-5 py-2 font-bold text-white bg-pink-600 hover:bg-pink-500 uppercase tracking-wide rounded-sm transform hover:-translate-y-0.5 transition-all"
      >
        Apply Now
      </Link>
    </div>
  );
}
