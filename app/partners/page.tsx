// app/partners/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

/** Light design tokens to stay consistent with the landing page */
const TOKENS = {
  radii: { card: "rounded-3xl", pill: "rounded-full" },
  border: "border border-white/10",
  cardBg: "bg-black/30 backdrop-blur-2xl",
  shadow: "shadow-2xl",
  gradientPrimary: "from-purple-600 via-pink-600 to-blue-600",
  gradientText: "from-purple-300 via-pink-300 to-blue-300",
  divider: "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500",
  textSubtle: "text-gray-300",
};

export default function PartnersInvestorsPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Subtle galaxy-like background to match home */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,.85) 100%)",
          }}
        />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-28 pb-16">
        <h1 className="text-5xl sm:text-6xl font-black mb-6">
          <span
            className={`bg-gradient-to-r ${TOKENS.gradientText} bg-clip-text text-transparent`}
          >
            Partners & Investors
          </span>
        </h1>

        <div className="max-w-4xl space-y-8">
          <p className="text-xl text-gray-200 leading-relaxed">
            We are a France-based R&amp;D and publishing studio integrating
            advanced AI into immersive, engaging, and innovative interactive
            experiences. Our roadmap is phased and capital-efficient:
          </p>

          {/* Roadmap cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                t: "Near term",
                d: "Ship AI-driven titles and tools with high immersion; explore cutting-edge generative and agentic AI in game mechanics.",
              },
              {
                t: "Mid term",
                d: "Extend with game-specialized LLMs and AI-native tooling/engines to raise quality and production velocity.",
              },
              {
                t: "Long term",
                d: "Deploy agentic AI inside complex, realistic simulations and games.",
              },
              {
                t: "Beyond entertainment",
                d: "Remain a game studio first; selectively transfer agentic AI to real-world applications (management, education, industry).",
              },
            ].map((c, i) => (
              <div
                key={i}
                className={`p-6 ${TOKENS.cardBg} ${TOKENS.border} ${TOKENS.radii.card}`}
              >
                <h3 className="text-lg font-bold text-purple-300 mb-3">
                  {c.t}
                </h3>
                <p className={TOKENS.textSubtle}>{c.d}</p>
              </div>
            ))}
          </div>

          <p className={TOKENS.textSubtle}>
            We operate PC/Steam-first with mobile expansion to broaden reach,
            and a hybrid revenue model to create long-tail upside. Full
            materials are available under NDA.
          </p>

          <p className="text-sm text-gray-400">
            <strong>Financing stance:</strong> founder-funded through early
            milestones, with openness to aligned VC/angels, selective strategic
            partnerships, targeted community financing at public betas, and
            non-dilutive/banking instruments as we scale—prioritizing
            independence early and disciplined growth thereafter.
          </p>

          <Link
            href="#contact"
            className={`inline-block px-8 py-3 font-bold rounded-2xl bg-gradient-to-r ${TOKENS.gradientPrimary} ${TOKENS.shadow} hover:scale-[1.02] transition`}
          >
            Request our investor brief →
          </Link>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="h-px w-full mx-auto bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-10" />
        <h2 className="text-4xl font-black mb-8">
          <span
            className={`bg-gradient-to-r ${TOKENS.gradientText} bg-clip-text text-transparent`}
          >
            Why Now / Market Opportunity
          </span>
        </h2>

        <div className="max-w-4xl space-y-6 leading-relaxed">
          <p className={TOKENS.textSubtle}>
            PC/Steam remains a durable home for premium indies, retro/pixel
            aesthetics continue to surface well in discovery, and audiences are
            hungry for systemic, replayable experiences that feel fresh.
            NeximusAI leans into that moment—but not by outsourcing creativity
            to unreliable generators. Our production is human-first, with AI
            used sparingly and auditable for acceleration and QA, and always
            passing rigorous human review.
          </p>
          <p className={TOKENS.textSubtle}>
            Where we differentiate is{" "}
            <strong className="text-purple-300">
              AI-native game mechanics
            </strong>
            : generative and agentic systems that drive moment-to-moment play
            (far beyond chat companions), enabling emergent scenarios, adaptive
            challenges, and living worlds that broaden the addressable
            market—from core players to curious newcomers. This compounds
            retention and word-of-mouth while keeping scope disciplined and
            capital-efficient. We are PC/Steam-first with mobile expansion to
            extend reach. Specific implementations and models remain undisclosed
            publicly; full details are available under NDA.
          </p>
        </div>
      </section>

      {/* Team & Governance */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="h-px w-full mx-auto bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-10" />
        <h2 className="text-4xl font-black mb-8">
          <span
            className={`bg-gradient-to-r ${TOKENS.gradientText} bg-clip-text text-transparent`}
          >
            Team & Governance
          </span>
        </h2>

        <p className={`${TOKENS.textSubtle} max-w-4xl mb-8`}>
          We keep personal identities private on this page; full bios are
          available under NDA. Core leadership and roles:
        </p>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              t: "Founder — President (CEO) & Chief Architect and Director (AI/Game Design Strategy)",
              d: "Studio originator and Head of Studio. PhD in Mathematics; Atiyah UK-London Mathematical Society award; 10+ years in fundamental/applied research (math/physics). Studio architect for game/software concepts and AI-native mechanics; leads strategy, operations, legal and technical delivery.",
            },
            {
              t: "Founder — Investor & Technical Collaborator (Full-Stack + GTM)",
              d: "Senior full-stack engineer (React/NextJS/TypeScript/Python/Java) with 8+ years across build, SEO, UX, and server integration; MCIT (Canada). Prior managerial experience in global luxury retail. Operates an IT company in Canada.",
            },
            {
              t: "Founder — Investor & Financial Strategy Advisor (Markets/Structuring)",
              d: "10 years in trading/investment and portfolio management (forex/equities). Licensed Securities Dealer’s Representative, ACSI (CISI, UK). Operates investment businesses internationally; registered with the Central Bank of Cyprus, regulated by CySEC, and reporting to MOKAS. Advises on financial structuring, profitability forecasts, and investment opportunities.",
            },
          ].map((c, i) => (
            <div
              key={i}
              className={`p-6 ${TOKENS.cardBg} ${TOKENS.border} ${TOKENS.radii.card}`}
            >
              <h3 className="text-xl font-bold text-green-300 mb-3">{c.t}</h3>
              <p className={`${TOKENS.textSubtle} text-sm`}>{c.d}</p>
            </div>
          ))}
        </div>

        <div
          className={`p-6 ${TOKENS.cardBg} ${TOKENS.border} ${TOKENS.radii.card} mb-8`}
        >
          <h3 className="text-2xl font-bold text-green-300 mb-4">
            Team Snapshot
          </h3>
          <ul className={`${TOKENS.textSubtle} space-y-2`}>
            <li>
              • ~7+ remote collaborators (France-based) covering AI, Unity, art,
              and audio.
            </li>
            <li>
              • Credentials: 3 PhDs (math/physics) and 2 dual master’s (incl.
              cybersecurity).
            </li>
            <li>
              • Engagement model: all independent collaborators/contractors at
              this stage.
            </li>
          </ul>
        </div>

        <div
          className={`p-6 ${TOKENS.cardBg} ${TOKENS.border} ${TOKENS.radii.card}`}
        >
          <h3 className="text-2xl font-bold text-green-300 mb-4">Culture</h3>
          <ul className={`${TOKENS.textSubtle} space-y-2`}>
            <li>
              • Teamship &amp; trust as defaults; flexible, remote-first
              workflows.
            </li>
            <li>
              • Aligned incentives via structured profit-share participation.
            </li>
          </ul>
        </div>
      </section>

      {/* Traction & Signals */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="h-px w-full mx-auto bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-10" />
        <h2 className="text-4xl font-black mb-8">
          <span
            className={`bg-gradient-to-r ${TOKENS.gradientText} bg-clip-text text-transparent`}
          >
            Traction & Signals
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl">
          {[
            {
              t: "Stage",
              d: "Flagship title: pre-production (cozy / pixel-art; AI-native mechanics). Working title undisclosed (placeholder until trademark clearance).",
            },
            {
              t: "AI mechanics",
              d: "Proof-of-concept achieved for AI-driven gameplay (generative/agentic). Details under NDA.",
            },
            {
              t: "Builds & testing",
              d: "No external build yet; closed playtests (NDA) planned.",
            },
            {
              t: "Conversations",
              d: "Selective talks under NDA with advisors, platforms, and publishers; economics aligned with independence (no high take-rate deals).",
            },
            {
              t: "Team & hiring",
              d: "~7+ remote (France) across AI, Unity, art, audio; hiring Pixel Artist (remote, contract).",
            },
            {
              t: "Company & IP",
              d: "French SAS registered; collaborator IP assignment & NDAs; ethical AI/data policy; secure version control.",
            },
          ].map((c, i) => (
            <div
              key={i}
              className={`p-4 ${TOKENS.cardBg} ${TOKENS.border} ${TOKENS.radii.card}`}
            >
              <h3 className="font-bold text-pink-300 mb-2">{c.t}</h3>
              <p className="text-sm text-gray-300">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Funding & Capital Strategy */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="h-px w-full mx-auto bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-10" />
        <h2 className="text-4xl font-black mb-8">
          <span
            className={`bg-gradient-to-r ${TOKENS.gradientText} bg-clip-text text-transparent`}
          >
            Funding & Capital Strategy
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
          {[
            {
              t: "Current stance",
              d: "Founder-funded through early milestones; capital-efficient operating model.",
            },
            {
              t: "Openness",
              d: "Selective VC/angel and strategic partnerships where terms align with independence.",
            },
            {
              t: "Non-dilutive path",
              d: "We actively leverage public programs (France/EU)—subject to eligibility and timing.",
            },
            {
              t: "Details",
              d: "Full plan and use-of-proceeds available under NDA.",
            },
          ].map((c, i) => (
            <div
              key={i}
              className={`p-6 ${TOKENS.cardBg} ${TOKENS.border} ${TOKENS.radii.card}`}
            >
              <h3 className="text-lg font-bold text-orange-300 mb-2">{c.t}</h3>
              <p className={TOKENS.textSubtle}>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* De-Risking Roadmap */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="h-px w-full mx-auto bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-10" />
        <h2 className="text-4xl font-black mb-8">
          <span
            className={`bg-gradient-to-r ${TOKENS.gradientText} bg-clip-text text-transparent`}
          >
            De-Risking Roadmap (What We’ll Prove Next)
          </span>
        </h2>

        <div className="space-y-6 max-w-4xl">
          {[
            {
              t: "Playable Fun, Not a Pitch",
              d: "Internal first-playable that demonstrates the 5-minute loop and pixel art quality bar. Artifacts under NDA: gameplay capture + playtest notes.",
            },
            {
              t: "AI-in-Mechanics Reliability",
              d: "Advance to AMRL-2 (AI Mechanics Readiness Level): reproducible behaviors, test-harness coverage, guardrails.",
              extra:
                "AMRL scale: 0 Idea · 1 PoC (isolated) · 2 Reproducible in harness · 3 Integrated prototype · 4 Vertical-slice ready · 5 Live-ready",
            },
            {
              t: "Throughput & Craft",
              d: "Stable content pipeline (art/Unity/AI tools) with predictable time-to-shippable and QA gates. NDA: sample assets + pipeline timings.",
            },
            {
              t: "Market Signal",
              d: "Open newsletter/Discord/waitlist at reveal; gather early creator/press interest. NDA: channel metrics & sentiment snapshots.",
            },
          ].map((c, i) => (
            <div
              key={i}
              className={`p-6 ${TOKENS.cardBg} ${TOKENS.border} ${TOKENS.radii.card}`}
            >
              <h3 className="text-xl font-bold text-orange-300 mb-3">{c.t}</h3>
              <p className={TOKENS.textSubtle}>{c.d}</p>
              {c.extra && (
                <div className="mt-3 text-sm text-gray-400 bg-black/30 border border-white/10 rounded-2xl p-3">
                  {c.extra}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Careers */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="h-px w-full mx-auto bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-10" />
        <h2 className="text-4xl font-black mb-8">
          <span
            className={`bg-gradient-to-r ${TOKENS.gradientText} bg-clip-text text-transparent`}
          >
            We’re Hiring
          </span>
        </h2>

        <div
          className={`p-8 ${TOKENS.cardBg} ${TOKENS.border} ${TOKENS.radii.card} max-w-4xl`}
        >
          <h3 className="text-2xl font-bold text-cyan-300 mb-4">
            Open Role — Pixel Artist (remote, contract)
          </h3>

          <ul className={`${TOKENS.textSubtle} space-y-2 mb-6`}>
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
              • Collaborate with AI/gameplay &amp; Unity to integrate assets
              cleanly
            </li>
            <li>
              • Deliver layered/editable files; consistent naming/versioning
            </li>
            <li>
              • English proficiency (We consider applications with French
              proficiency supplemented with entry-level English)
            </li>
          </ul>

          <div className="space-y-4">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-2xl transition"
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

      {/* Press & Media (Stealth-safe) */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="h-px w-full mx-auto bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-10" />
        <h2 className="text-4xl font-black mb-8">
          <span
            className={`bg-gradient-to-r ${TOKENS.gradientText} bg-clip-text text-transparent`}
          >
            Press & Media (Stealth-safe)
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
          <div
            className={`p-6 ${TOKENS.cardBg} ${TOKENS.border} ${TOKENS.radii.card}`}
          >
            <h3 className="text-lg font-bold text-purple-300 mb-2">
              What we can do now
            </h3>
            <ul className={`${TOKENS.textSubtle} space-y-2 text-sm`}>
              <li>
                • Studio-level interviews on our AI-in-mechanics approach and
                roadmap philosophy.
              </li>
              <li>
                • Thought leadership (panels, talks) on agentic/generative AI in
                game design.
              </li>
              <li>• Backgrounders under embargo; select assets on request.</li>
            </ul>
          </div>

          <div
            className={`p-6 ${TOKENS.cardBg} ${TOKENS.border} ${TOKENS.radii.card}`}
          >
            <h3 className="text-lg font-bold text-purple-300 mb-2">
              Press assets (on request)
            </h3>
            <ul className={`${TOKENS.textSubtle} space-y-2 text-sm`}>
              <li>
                • Company boilerplate (EN), founder bio (short), logo (SVG/PNG),
                brand notes.
              </li>
              <li>• Fact sheet (studio overview, milestones).</li>
              <li>• Embargo window agreed case-by-case.</li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          Contact:{" "}
          <a href="mailto:press@neximusai.com" className="text-purple-300">
            press@neximusai.com
          </a>{" "}
          — please mention outlet, angle, and timelines.
        </p>
      </section>

      {/* Ethical AI & GDPR (brief) */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="h-px w-full mx-auto bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-10" />
        <h2 className="text-4xl font-black mb-8">
          <span
            className={`bg-gradient-to-r ${TOKENS.gradientText} bg-clip-text text-transparent`}
          >
            Ethical AI & GDPR (brief)
          </span>
        </h2>

        <div
          className={`p-6 ${TOKENS.cardBg} ${TOKENS.border} ${TOKENS.radii.card} max-w-4xl`}
        >
          <ul className={`${TOKENS.textSubtle} space-y-2`}>
            <li>
              • Human-led by design; AI augments craft and powers in-game
              mechanics.
            </li>
            <li>
              • No personal-data scraping; opt-in playtest telemetry with clear
              retention/erasure.
            </li>
            <li>
              • GDPR-aware pipelines; EU-hosted storage where feasible; DPAs;
              access controls &amp; audit logs.
            </li>
            <li>
              • Safety &amp; reliability: guardrails, test harnesses, and human
              review (AMRL rubric) before release.
            </li>
            <li>
              • IP &amp; provenance: only licensed/original data; provenance
              tracked.
            </li>
            <li>
              • Security: encrypted repos, least-privilege access, 2FA; incident
              response playbook.
            </li>
          </ul>
          <p className="text-sm text-gray-400 mt-4">
            Summary only; full policies and DPIA documentation available under
            NDA (CNIL-aligned practices).
          </p>
        </div>
      </section>

      {/* Advisors */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="h-px w-full mx-auto bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-10" />
        <h2 className="text-4xl font-black mb-8">
          <span
            className={`bg-gradient-to-r ${TOKENS.gradientText} bg-clip-text text-transparent`}
          >
            Advisors
          </span>
        </h2>

        <p className={`${TOKENS.textSubtle} max-w-4xl`}>
          In formation. Profiles include AI academics &amp; researchers, senior
          business strategy consultants, branding/visual-identity consultants,
          and QA/process consultants. Full details available under NDA.
        </p>
      </section>

      {/* Mini FAQ */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="h-px w-full mx-auto bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-10" />
        <h2 className="text-4xl font-black mb-8">
          <span
            className={`bg-gradient-to-r ${TOKENS.gradientText} bg-clip-text text-transparent`}
          >
            Mini FAQ
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {[
            {
              q: "Are you currently raising?",
              a: "Selective conversations with aligned angels/VCs. Materials shared under NDA.",
            },
            {
              q: "Do you work with publishers?",
              a: "We’re open to partnerships where economics preserve independence (no high take-rate models).",
            },
            {
              q: "How do I get access to the deck/builds?",
              a: "Request an NDA via partners@neximusai.com; we’ll schedule a private session.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className={`p-6 ${TOKENS.cardBg} ${TOKENS.border} ${TOKENS.radii.card}`}
            >
              <h3 className="text-lg font-bold text-yellow-300 mb-2">{f.q}</h3>
              <p className={TOKENS.textSubtle}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & CTAs */}
      <section id="contact" className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="h-px w-full mx-auto bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-10" />
        <h2 className="text-4xl font-black mb-8">
          <span
            className={`bg-gradient-to-r ${TOKENS.gradientText} bg-clip-text text-transparent`}
          >
            Contact & CTAs
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className={`p-6 ${TOKENS.cardBg} ${TOKENS.border} ${TOKENS.radii.card}`}
          >
            <h3 className="text-xl font-bold text-indigo-300 mb-4">
              Investors & Partners
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                • Request our investor brief →{" "}
                <a
                  href="mailto:partners@neximusai.com"
                  className="text-indigo-300"
                >
                  partners@neximusai.com
                </a>
              </li>
              <li>
                • Publisher inquiry →{" "}
                <a
                  href="mailto:bizdev@neximusai.com"
                  className="text-indigo-300"
                >
                  bizdev@neximusai.com
                </a>
              </li>
              <li>
                • Advisor intro →{" "}
                <a
                  href="mailto:advisors@neximusai.com"
                  className="text-indigo-300"
                >
                  advisors@neximusai.com
                </a>
              </li>
            </ul>
          </div>

          <div
            className={`p-6 ${TOKENS.cardBg} ${TOKENS.border} ${TOKENS.radii.card}`}
          >
            <h3 className="text-xl font-bold text-indigo-300 mb-4">Careers</h3>
            <p className="text-sm text-gray-300">
              Pixel Artist (remote, contract) →{" "}
              <a
                href="mailto:careers@neximusai.com"
                className="text-indigo-300"
              >
                careers@neximusai.com
              </a>
              <br />
              <span className="text-gray-400">
                (Portfolio, brief CV/LinkedIn, availability, day-rate.)
              </span>
            </p>
          </div>

          <div
            className={`p-6 ${TOKENS.cardBg} ${TOKENS.border} ${TOKENS.radii.card}`}
          >
            <h3 className="text-xl font-bold text-indigo-300 mb-4">General</h3>
            <p className="text-sm text-gray-300">
              <a href="mailto:hello@neximusai.com" className="text-indigo-300">
                hello@neximusai.com
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

      {/* Legal notes */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-10">
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-3">
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
