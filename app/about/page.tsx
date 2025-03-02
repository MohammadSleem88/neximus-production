"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-black via-[#0b0b0b] to-gray-900 text-white min-h-screen">
      {/* If using Next.js 15 with an overall layout, Navbar and Footer come from layout.
          Otherwise, import them if using the Pages router. */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-16">
        <h1 className="text-5xl font-extrabold uppercase text-pink-500 tracking-wide mb-4">
          About Us
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
          NeximusAI is an innovative studio dedicated to pushing the boundaries
          of AI-driven interactive experiences. Our mission is to connect the
          next generation to maximus innovation—melding cutting-edge technology
          with imaginative design to build worlds that spark creativity,
          learning, and fun. We’re heavily focused on research and advanced
          development, but we aren’t sharing specifics about our unannounced
          project just yet.
        </p>

        {/* Who We Are */}
        <div className="bg-black/60 p-6 rounded-xl shadow-md border border-gray-800 mb-12">
          <h2 className="text-3xl font-bold text-pink-300 mb-3 uppercase tracking-wide">
            Who We Are
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our team is a diverse group of engineers, artists, designers, and
            innovators passionate about creating groundbreaking experiences
            powered by AI. We’ve come together from different backgrounds with a
            shared dream: to fuse next-gen technology with compelling,
            human-centric design in ways that inspire and engage.
          </p>
        </div>

        {/* Core Values */}
        <div className="bg-black/60 p-6 rounded-xl shadow-md border border-gray-800 mb-12">
          <h2 className="text-3xl font-bold text-pink-300 mb-3 uppercase tracking-wide">
            Our Core Values
          </h2>
          <ul className="space-y-3 text-gray-300 text-lg leading-relaxed list-disc list-inside">
            <li>
              <span className="text-pink-400 font-semibold">Innovation:</span>{" "}
              Continuously experimenting with AI and immersive tech to spark new
              possibilities.
            </li>
            <li>
              <span className="text-pink-400 font-semibold">Inclusivity:</span>{" "}
              Welcoming a wide spectrum of perspectives and backgrounds in our
              creative process.
            </li>
            <li>
              <span className="text-pink-400 font-semibold">
                Collaboration:
              </span>{" "}
              Building solutions together through open dialogue and constant
              learning.
            </li>
            <li>
              <span className="text-pink-400 font-semibold">Integrity:</span>{" "}
              Respecting our players, partners, and peers by being transparent
              about our goals and processes.
            </li>
          </ul>
        </div>

        {/* Brief Team Section */}
        <div className="bg-black/60 p-6 rounded-xl shadow-md border border-gray-800">
          <h2 className="text-3xl font-bold text-pink-300 mb-3 uppercase tracking-wide">
            Meet the Team
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Our core leadership includes industry veterans from AI research,
            interactive design, and art direction. While we can’t share details
            on our upcoming title, each teammate brings unique expertise and
            passion to shape new frontiers in AI-driven gameplay.
          </p>
          {/* A CTA to see open roles or contact */}
          <div className="space-x-4">
            <Link
              href="/careers"
              className="inline-block px-6 py-2 font-bold text-white 
                bg-pink-600 hover:bg-pink-500 uppercase tracking-wide 
                rounded-sm transform hover:-translate-y-0.5 transition
                "
            >
              Join Our Team
            </Link>
            <Link
              href="/contact"
              className="inline-block px-6 py-2 font-bold text-white 
                bg-gray-700 hover:bg-gray-600 uppercase tracking-wide 
                rounded-sm transform hover:-translate-y-0.5 transition
                "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
