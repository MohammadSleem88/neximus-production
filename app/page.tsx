// app/page.tsx
"use client";

import { useEffect, useState, ReactNode } from "react";
import Navbar from "./components/Navbar";

/**
 * Tokens
 */
const TOKENS = {
  radii: { card: "rounded-3xl", pill: "rounded-full" },
  border: "border border-white/10",
  cardBg: "bg-black/30 backdrop-blur-2xl",
  cardHover: "hover:bg-black/40",
  textSubtle: "text-gray-300",
  textAccent: "text-purple-300",
  shadow: "shadow-2xl",
  gradientPrimary: "from-purple-600 via-pink-600 to-blue-600",
  gradientPrimaryHover: "from-purple-700 via-pink-700 to-blue-700",
  gradientText: "from-purple-300 via-pink-300 to-blue-300",
  divider: "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500",
};

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}
function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`relative ${className}`}>
      {children}
    </section>
  );
}

/** Galaxy Background */
function GalaxyBackground() {
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState<
    {
      id: number;
      x: number;
      y: number;
      size: number;
      intensity: number;
      delay: number;
    }[]
  >([]);

  useEffect(() => {
    setMounted(true);
    const newStars = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      intensity: 0.3 + Math.random() * 0.7,
      delay: Math.random() * 8,
    }));
    setStars(newStars);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-purple-950 to-black -z-10" />
    );
  }

  return (
    <>
      <style jsx>{`
        @keyframes galaxy-drift {
          0%,
          100% {
            transform: translate(-40px, -20px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translate(20px, 10px) rotate(180deg);
            opacity: 0.6;
          }
        }
        @keyframes star-twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        @keyframes nebula-flow {
          0%,
          100% {
            transform: translate(-10px, -10px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(10px, 10px) scale(1.1);
            opacity: 0.5;
          }
        }
        .galaxy-nebula {
          animation: galaxy-drift 40s ease-in-out infinite;
          filter: blur(80px);
        }
        .star-field {
          animation: star-twinkle 6s ease-in-out infinite;
        }
        .nebula-cloud {
          animation: nebula-flow 30s ease-in-out infinite;
          filter: blur(100px);
        }
        @media (prefers-reduced-motion: reduce) {
          .galaxy-nebula,
          .star-field,
          .nebula-cloud {
            animation: none !important;
          }
        }
      `}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black" />
        <div className="absolute inset-0">
          <div
            className="galaxy-nebula absolute w-[600px] h-[600px] -top-48 -left-48 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, rgba(147,51,234,0.3), transparent 60%)",
            }}
          />
          <div
            className="galaxy-nebula absolute w-[500px] h-[500px] -bottom-48 -right-48 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, rgba(59,130,246,0.25), transparent 60%)",
              animationDelay: "15s",
            }}
          />
        </div>

        <div className="absolute inset-0">
          {stars.map((star) => (
            <div
              key={star.id}
              className="star-field absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.intensity,
                animationDelay: `${star.delay}s`,
                boxShadow: `0 0 ${star.size * 2}px rgba(255,255,255,${
                  star.intensity * 0.5
                })`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 opacity-30">
          <div className="nebula-cloud absolute w-96 h-96 bg-purple-600 rounded-full top-1/4 left-1/4" />
          <div
            className="nebula-cloud absolute w-80 h-80 bg-blue-600 rounded-full bottom-1/3 right-1/4"
            style={{ animationDelay: "10s" }}
          />
          <div
            className="nebula-cloud absolute w-64 h-64 bg-pink-600 rounded-full top-1/2 left-1/2"
            style={{ animationDelay: "20s" }}
          />
        </div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.8) 100%)",
          }}
        />
      </div>
    </>
  );
}

/** PremiumNewsletter */
function PremiumNewsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email.trim() || isLoading || isSubmitted) return;
    setIsLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1200));
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3500);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4">
      <div className="relative group">
        <div
          className={`absolute -inset-1 bg-gradient-to-r ${TOKENS.gradientPrimary} ${TOKENS.radii.card} blur opacity-25 group-hover:opacity-40 transition duration-1000`}
        />
        <div
          className={`relative ${TOKENS.cardBg} ${TOKENS.border} ${TOKENS.radii.card} p-8 md:p-10 ${TOKENS.shadow}`}
        >
          <div className="space-y-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="Enter your email address"
              className="w-full px-6 py-4 bg-black/60 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
              disabled={isLoading}
              aria-label="Email address"
            />
            <button
              onClick={handleSubmit}
              disabled={isSubmitted || isLoading || !email.trim()}
              className={`relative w-full px-8 py-4 bg-gradient-to-r ${TOKENS.gradientPrimary} text-white font-bold rounded-2xl transition-all hover:scale-[1.02] disabled:opacity-50 ${TOKENS.shadow}`}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
              ) : isSubmitted ? (
                "✨ Welcome to the Future!"
              ) : (
                "Join the Revolution"
              )}
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-6 text-center">
            Exclusive updates on AI-driven gaming. No spam.
          </p>
        </div>
      </div>
    </div>
  );
}

/** Carousel */
function EliteGameCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Cultural Immersion",
      subtitle: "Living Worlds",
      description:
        "Experience authentic cultural environments that breathe with AI-driven life",
      icon: "🌍",
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Neural Integration",
      subtitle: "AI Companions",
      description:
        "Interact with beings that understand, remember, and evolve with you",
      icon: "🧠",
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Dynamic Storytelling",
      subtitle: "Infinite Narratives",
      description:
        "No scripts, no limits—every conversation creates a unique story path",
      icon: "📖",
      color: "from-pink-500 to-rose-600",
    },
  ];

  useEffect(() => {
    const t = setInterval(
      () => setCurrentSlide((p) => (p + 1) % slides.length),
      5000
    );
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div
        className={`relative h-80 md:h-96 overflow-hidden ${TOKENS.radii.card} ${TOKENS.cardBg} ${TOKENS.border} ${TOKENS.shadow}`}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-700 flex items-center justify-center ${
              i === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
            aria-hidden={i !== currentSlide}
          >
            <div className="text-center p-8 md:p-12 max-w-2xl">
              <div
                className={`inline-flex items-center justify-center w-20 h-20 ${TOKENS.radii.pill} bg-gradient-to-br ${slide.color} mb-6 text-3xl`}
                aria-hidden
              >
                {slide.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {slide.title}
              </h3>
              <p className="text-lg text-purple-300 font-medium mb-4">
                {slide.subtitle}
              </p>
              <p className={`${TOKENS.textSubtle} leading-relaxed`}>
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-3" role="tablist">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-selected={i === currentSlide}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 ${
              i === currentSlide
                ? "w-10 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                : "w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/** Vault */
function LuxuryVault() {
  return (
    <>
      <style jsx>{`
        @keyframes vault-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }
        .vault-core {
          animation: vault-spin 30s linear infinite;
        }
        .pulse-ring {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .vault-core,
          .pulse-ring {
            animation: none !important;
          }
        }
      `}</style>

      <div className="w-full max-w-lg mx-auto px-4">
        <div className="relative">
          <div
            className={`absolute -inset-4 bg-gradient-to-r ${TOKENS.gradientPrimary} rounded-3xl blur-xl opacity-30`}
          />
          <div
            className={`relative aspect-square ${TOKENS.cardBg} rounded-3xl ${TOKENS.border} overflow-hidden`}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="vault-core relative w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full pulse-ring opacity-50" />
                <div className="absolute inset-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full border-2 border-white/30" />
                <div className="absolute inset-8 bg-white rounded-full shadow-2xl" />
              </div>
            </div>

            <svg
              className="absolute inset-0 w-full h-full opacity-20"
              viewBox="0 0 400 400"
              aria-hidden
            >
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <div className="bg-black/60 px-6 py-3 rounded-2xl border border-white/20">
                <p className="text-purple-300 font-bold text-lg text-center">
                  The Vault
                </p>
                <p className="text-purple-200 text-sm text-center">
                  AI Consciousness Awaits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/** Page */
export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  const scrollToNewsletter = () => {
    document
      .getElementById("newsletter")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      <GalaxyBackground />

      {/* Hero */}
      <Section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-20"
      >
        <div
          className={`text-center w-full max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-16">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8">
              <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                NeximusAI
              </span>
            </h1>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text">
                Gaming in the AI Era
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto" />
              <p className="text-xl text-purple-200 font-medium">
                Connecting the Next Generation to Maximus Innovation
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="mb-20 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-700" />
            <div
              className={`relative ${TOKENS.cardBg} ${TOKENS.border} rounded-3xl p-8 md:p-12 max-w-5xl mx-auto`}
            >
              <p className="text-xl text-purple-100 italic leading-relaxed">
                "Building bridges across cultures, languages, and perspectives —
                because gaming unites us all as one humanity."
              </p>
            </div>
          </div>

          {/* Mission */}
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-20 leading-relaxed">
            We're building AI-driven original premium titles in deep
            development.
            <span className="text-purple-300 font-medium">
              {" "}
              Details come when they're ready.
            </span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <button
              onClick={scrollToNewsletter}
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-3xl transition-all hover:scale-105"
            >
              Experience the Future
            </button>
            <button className="px-10 py-4 bg-black/30 border border-white/20 hover:bg-white/10 text-white font-bold rounded-3xl transition-all hover:scale-105">
              Press & Partners
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-purple-400/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </Section>

      {/* Flagship */}
      <Section id="flagship" className="py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text mb-6">
              Our Flagship Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              An AI-driven experience that merges immersive gaming with the
              craft of living worlds
            </p>
          </div>

          <div className="mb-20">
            <EliteGameCarousel />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition" />
                <div
                  className={`relative ${TOKENS.cardBg} ${TOKENS.border} p-8 rounded-3xl`}
                >
                  <h3 className="text-2xl font-bold text-emerald-300 mb-4">
                    Travel with us
                  </h3>
                  <p className="text-gray-300">
                    Envision strolling through meticulously recreated
                    villages—each one capturing the essence of real-world
                    architecture and local customs.
                  </p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition" />
                <div
                  className={`relative ${TOKENS.cardBg} ${TOKENS.border} p-8 rounded-3xl`}
                >
                  <h3 className="text-2xl font-bold text-blue-300 mb-4">
                    Glimpse of Worlds
                  </h3>
                  <p className="text-gray-300">
                    From a quiet lakeside town to a bustling desert oasis—each
                    location is an ever-evolving mosaic of daily life.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition" />
                <div
                  className={`relative ${TOKENS.cardBg} ${TOKENS.border} p-8 rounded-3xl`}
                >
                  <h3 className="text-2xl font-bold text-purple-300 mb-4">
                    Living Systems
                  </h3>
                  <p className="text-gray-300">
                    No canned scripts. No forced paths. Every interaction is
                    unique, shaped by systems that adapt to your pace.
                  </p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition" />
                <div
                  className={`relative ${TOKENS.cardBg} ${TOKENS.border} p-8 rounded-3xl`}
                >
                  <h3 className="text-2xl font-bold text-pink-300 mb-4">
                    The Experience
                  </h3>
                  <p className="text-gray-300">
                    Presented in a charming pixel art style, blending warmth and
                    nostalgia with modern systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* First Game */}
      <Section id="vault-game" className="py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text mb-6">
              Our First Game
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-4xl mx-auto italic">
              A futuristic, sci-fi, ethical, mind-bending puzzle
              adventure—driven by AI systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <LuxuryVault />
            <div className="space-y-8">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition" />
                <div
                  className={`relative ${TOKENS.cardBg} ${TOKENS.border} p-8 rounded-3xl`}
                >
                  <h3 className="text-2xl font-bold text-cyan-300 mb-4">
                    Cross the Threshold
                  </h3>
                  <p className="text-gray-300">
                    In a place where the line between thought and matter is
                    thin, every command rewires the environment.
                  </p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition" />
                <div
                  className={`relative ${TOKENS.cardBg} ${TOKENS.border} p-8 rounded-3xl`}
                >
                  <h3 className="text-2xl font-bold text-violet-300 mb-4">
                    What Makes It Unique
                  </h3>
                  <p className="text-gray-300">
                    You are not merely following a story—you are training a
                    machine and confronting ethics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Newsletter */}
      <Section id="newsletter" className="py-32 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text mb-6">
            Be the First to Know
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-12" />
          <p className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto">
            Ready to step into AI-driven play set in living cultural worlds?
            Join the revolution.
          </p>
          <PremiumNewsletter />
        </div>
      </Section>
    </div>
  );
}
