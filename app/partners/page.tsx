// app/partners/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function PartnersInvestorsPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="bg-gradient-to-b from-black via-[#0b0b0b] to-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-16">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-indigo-400 uppercase tracking-wide mb-6">
          Partners & Investors
        </h1>

        <div className="max-w-4xl">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            We are a France-based R&D and publishing studio integrating advanced
            AI into immersive, engaging, and innovative interactive experiences.
            Our roadmap is phased and capital-efficient:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
              <h3 className="text-lg font-bold text-indigo-300 mb-3">
                Near term
              </h3>
              <p className="text-gray-300">
                Ship AI-driven titles and tools with high immersion; explore
                cutting-edge generative and agentic AI in game mechanics
              </p>
            </div>
            <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
              <h3 className="text-lg font-bold text-indigo-300 mb-3">
                Mid term
              </h3>
              <p className="text-gray-300">
                Extend with game-specialized LLMs and AI-native tooling/engines
                to raise quality and production velocity
              </p>
            </div>
            <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
              <h3 className="text-lg font-bold text-indigo-300 mb-3">
                Long term
              </h3>
              <p className="text-gray-300">
                Deploy agentic AI inside complex, realistic simulations and
                games
              </p>
            </div>
            <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
              <h3 className="text-lg font-bold text-indigo-300 mb-3">
                Beyond entertainment
              </h3>
              <p className="text-gray-300">
                Remain a game studio first, selectively transfer agentic AI to
                real-world applications
              </p>
            </div>
          </div>

          <p className="text-gray-300 mb-6">
            We operate PC/Steam-first with mobile expansion to broaden reach,
            and a hybrid revenue model to create long-tail upside. Full
            materials are available under NDA.
          </p>

          <p className="text-sm text-gray-400 mb-8">
            <strong>Financing stance:</strong> founder-funded through early
            milestones, with openness to aligned VC/angels, selective strategic
            partnerships, targeted community financing at public betas, and
            non-dilutive/banking instruments as we scale—prioritizing
            independence early and disciplined growth thereafter.
          </p>

          <Link
            href="#contact"
            className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full shadow-lg hover:-translate-y-1 transition-all"
          >
            Request our investor brief →
          </Link>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 border-t border-gray-800">
        <h2 className="text-4xl font-bold text-purple-400 mb-8 uppercase tracking-wide">
          Why Now / Market Opportunity
        </h2>

        <div className="max-w-4xl space-y-6 text-gray-300 leading-relaxed">
          <p>
            PC/Steam remains a durable home for premium indies, retro/pixel
            aesthetics continue to surface well in discovery, and audiences are
            hungry for systemic, replayable experiences that feel fresh.
            NeximusAI leans into that moment—but not by outsourcing creativity
            to unreliable generators. Our production is human-first, with AI
            used sparingly and auditable for acceleration and QA, and always
            passing rigorous human review.
          </p>

          <p>
            Where we differentiate is{" "}
            <strong className="text-purple-300">
              AI-native game mechanics
            </strong>
            : generative and agentic systems that drive moment-to-moment play
            (far beyond chat companions), enabling emergent scenarios, adaptive
            challenges, and living worlds that broaden the addressable
            market—from core players to curious newcomers.
          </p>

          <p>
            This design thesis compounds retention and word-of-mouth while
            keeping scope disciplined and capital-efficient. We are
            PC/Steam-first with mobile expansion to extend reach. Specific
            implementations and models remain undisclosed publicly; full details
            are available under NDA.
          </p>
        </div>
      </section>

      {/* Team & Governance */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 border-t border-gray-800">
        <h2 className="text-4xl font-bold text-green-400 mb-8 uppercase tracking-wide">
          Team & Governance
        </h2>

        <p className="text-gray-300 mb-8 max-w-4xl">
          We keep personal identities private on this page; full bios are
          available under NDA. Core leadership and roles:
        </p>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-green-300 mb-3">
              Founder — President (CEO) & Chief Architect
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Studio originator and Head of Studio. PhD in Mathematics; Atiyah
              UK-London Mathematical Society award; 10+ years in
              fundamental/applied research (math/physics). Studio architect for
              game/software concepts and AI-native mechanics; leads strategy,
              operations, legal and technical delivery.
            </p>
          </div>

          <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-green-300 mb-3">
              Founder — Investor & Technical Collaborator
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Senior full-stack engineer (React/NextJS/TypeScript/Python/Java)
              with 8+ years across build, SEO, UX, and server integration; MCIT
              (Canada). Prior managerial experience in global luxury retail,
              adding user/commercial ops depth. Operates an IT company in
              Canada.
            </p>
          </div>

          <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-green-300 mb-3">
              Founder — Investor & Financial Strategy Advisor
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              10 years in trading/investment and portfolio management
              (forex/equities). Licensed Securities Dealer's Representative,
              ACSI (CISI, UK). Operates investment businesses internationally;
              registered with the Central Bank of Cyprus, regulated by CySEC.
              Advises on financial structuring and investment opportunities.
            </p>
          </div>
        </div>

        <div className="bg-black/40 p-6 rounded-xl border border-gray-800 mb-8">
          <h3 className="text-2xl font-bold text-green-300 mb-4">
            Team Snapshot
          </h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              <strong>~7+ remote collaborators</strong> (France-based) covering
              AI, Unity, art, and audio
            </li>
            <li>
              <strong>Credentials:</strong> 3 PhDs (math/physics) and 2 dual
              master's (incl. cybersecurity)
            </li>
            <li>
              <strong>Engagement model:</strong> All independent
              collaborators/contractors at this stage
            </li>
          </ul>
        </div>

        <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
          <h3 className="text-2xl font-bold text-green-300 mb-4">Culture</h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              <strong>Teamship & trust</strong> as defaults; flexible,
              remote-first workflows
            </li>
            <li>
              <strong>Aligned incentives</strong> via structured profit-share
              participation
            </li>
          </ul>
        </div>
      </section>

      {/* Traction & Signals */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 border-t border-gray-800">
        <h2 className="text-4xl font-bold text-pink-400 mb-8 uppercase tracking-wide">
          Traction & Signals
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl">
          <div className="space-y-4">
            <div className="bg-black/40 p-4 rounded-lg border border-gray-800">
              <h3 className="font-bold text-pink-300 mb-2">Stage</h3>
              <p className="text-gray-300 text-sm">
                Flagship title: pre-production (cozy / pixel-art; AI-native
                mechanics). Working title undisclosed.
              </p>
            </div>

            <div className="bg-black/40 p-4 rounded-lg border border-gray-800">
              <h3 className="font-bold text-pink-300 mb-2">AI Mechanics</h3>
              <p className="text-gray-300 text-sm">
                Proof-of-concept achieved for AI-driven gameplay
                (generative/agentic). Details under NDA.
              </p>
            </div>

            <div className="bg-black/40 p-4 rounded-lg border border-gray-800">
              <h3 className="font-bold text-pink-300 mb-2">Team & Hiring</h3>
              <p className="text-gray-300 text-sm">
                ~7+ remote (France) across AI, Unity, art, audio; hiring Pixel
                Artist (remote, contract).
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-black/40 p-4 rounded-lg border border-gray-800">
              <h3 className="font-bold text-pink-300 mb-2">Builds & Testing</h3>
              <p className="text-gray-300 text-sm">
                No external build yet; closed playtests (NDA) planned.
              </p>
            </div>

            <div className="bg-black/40 p-4 rounded-lg border border-gray-800">
              <h3 className="font-bold text-pink-300 mb-2">Conversations</h3>
              <p className="text-gray-300 text-sm">
                Selective talks under NDA with advisors, platforms, and
                publishers; economics aligned with independence.
              </p>
            </div>

            <div className="bg-black/40 p-4 rounded-lg border border-gray-800">
              <h3 className="font-bold text-pink-300 mb-2">Company & IP</h3>
              <p className="text-gray-300 text-sm">
                French SAS registered; collaborator IP assignment & NDAs;
                ethical AI/data policy; secure version control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* De-Risking Roadmap */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 border-t border-gray-800">
        <h2 className="text-4xl font-bold text-orange-400 mb-8 uppercase tracking-wide">
          De-Risking Roadmap (What We'll Prove Next)
        </h2>

        <div className="space-y-6 max-w-4xl">
          <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-orange-300 mb-3">
              Playable Fun, Not a Pitch
            </h3>
            <p className="text-gray-300">
              Internal first-playable that demonstrates the 5-minute loop and
              pixel art quality bar. Artifacts under NDA: gameplay capture +
              playtest notes.
            </p>
          </div>

          <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-orange-300 mb-3">
              AI-in-Mechanics Reliability
            </h3>
            <p className="text-gray-300 mb-3">
              Advance to AMRL-2 (AI Mechanics Readiness Level): reproducible
              behaviors, test-harness coverage, guardrails. NDA: harness report
              + edge-case suite.
            </p>
            <div className="text-sm text-gray-400 bg-gray-800 p-3 rounded">
              <strong>AMRL scale:</strong> 0 Idea · 1 PoC (isolated) · 2
              Reproducible in harness · 3 Integrated prototype · 4
              Vertical-slice ready · 5 Live-ready
            </div>
          </div>

          <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-orange-300 mb-3">
              Throughput & Craft
            </h3>
            <p className="text-gray-300">
              Stable content pipeline (art/Unity/AI tools) with predictable
              time-to-shippable and QA gates. NDA: sample assets + pipeline
              timings.
            </p>
          </div>

          <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-orange-300 mb-3">
              Market Signal
            </h3>
            <p className="text-gray-300">
              Open newsletter/Discord/waitlist at reveal; gather early
              creator/press interest. NDA: channel metrics & sentiment
              snapshots.
            </p>
          </div>
        </div>
      </section>

      {/* Careers Integration */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 border-t border-gray-800">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 uppercase tracking-wide">
          We're Hiring
        </h2>

        <div className="bg-black/40 p-8 rounded-xl border border-gray-800 max-w-4xl">
          <h3 className="text-2xl font-bold text-cyan-300 mb-4">
            Open Role — Pixel Artist (remote, contract)
          </h3>

          <div className="space-y-4 text-gray-300 mb-6">
            <ul className="space-y-2">
              <li>• Aseprite experience</li>
              <li>
                • Craft cozy, characterful pixel art (environments, props,
                characters, UI)
              </li>
              <li>
                • Build tilesets and small animations aligned to a shared style
                guide
              </li>
              <li>
                • Collaborate with AI/gameplay & Unity to integrate assets
                cleanly
              </li>
              <li>
                • Deliver layered/editable files; consistent naming/versioning
              </li>
              <li>
                • English proficiency (We consider applications with French
                proficiency supplemented with english entry level)
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full transition-all"
            >
              Apply Now
            </Link>
            <p className="text-sm text-gray-400">
              Send portfolio link, brief CV/LinkedIn, availability, and
              day-rate/fee range with subject: Pixel Artist — Your Name
            </p>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 border-t border-gray-800">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8 uppercase tracking-wide">
          Mini FAQ
        </h2>

        <div className="space-y-6 max-w-3xl">
          <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
            <h3 className="text-lg font-bold text-yellow-300 mb-2">
              Are you currently raising?
            </h3>
            <p className="text-gray-300">
              Selective conversations with aligned angels/VCs. Materials shared
              under NDA.
            </p>
          </div>

          <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
            <h3 className="text-lg font-bold text-yellow-300 mb-2">
              Do you work with publishers?
            </h3>
            <p className="text-gray-300">
              We're open to partnerships where economics preserve independence
              (no high take-rate models).
            </p>
          </div>

          <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
            <h3 className="text-lg font-bold text-yellow-300 mb-2">
              How do I get access to the deck/builds?
            </h3>
            <p className="text-gray-300">
              Request an NDA via partners@neximusai.com; we'll schedule a
              private session.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & CTAs */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 sm:px-8 py-16 border-t border-gray-800"
      >
        <h2 className="text-4xl font-bold text-indigo-400 mb-8 uppercase tracking-wide">
          Contact & CTAs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-indigo-300 mb-4">
              Investors & Partners
            </h3>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>
                • Request our investor brief →{" "}
                <a
                  href="mailto:partners@neximusai.com"
                  className="text-indigo-400"
                >
                  partners@neximusai.com
                </a>
              </li>
              <li>
                • Publisher inquiry →{" "}
                <a
                  href="mailto:bizdev@neximusai.com"
                  className="text-indigo-400"
                >
                  bizdev@neximusai.com
                </a>
              </li>
              <li>
                • Advisor intro →{" "}
                <a
                  href="mailto:advisors@neximusai.com"
                  className="text-indigo-400"
                >
                  advisors@neximusai.com
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-indigo-300 mb-4">Careers</h3>
            <p className="text-gray-300 text-sm">
              Pixel Artist (remote, contract) →{" "}
              <a
                href="mailto:careers@neximusai.com"
                className="text-indigo-400"
              >
                careers@neximusai.com
              </a>
              <br />
              <span className="text-gray-400">
                (Portfolio, brief CV/LinkedIn, availability, day-rate.)
              </span>
            </p>
          </div>

          <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-indigo-300 mb-4">General</h3>
            <p className="text-gray-300 text-sm">
              <a href="mailto:neximusai@gmail.com" className="text-indigo-400">
                neximusai@gmail.com
              </a>{" "}
              (routing within 24–48h)
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-6 max-w-3xl">
          <strong>Note:</strong> Sensitive materials shared under NDA or embargo
          at our discretion. All email contacts are operational.
        </p>
      </section>

      {/* Legal Footer */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-8 border-t border-gray-800">
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-4">
            This page is for informational purposes only and does not constitute
            an offer to sell or a solicitation to buy securities.
          </p>
          <p className="text-xs text-gray-500">
            Contains forward-looking statements subject to risks and
            uncertainties; actual results may differ.
          </p>
        </div>
      </section>
    </div>
  );
}
