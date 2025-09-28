// app/coming-soon/ComingSoonGate.tsx
"use client";

import { useEffect, useState } from "react";

const TOKENS = {
  radii: { card: "rounded-3xl", pill: "rounded-full" },
  border: "border border-white/10",
  cardBg: "bg-black/30 backdrop-blur-2xl",
  textSubtle: "text-gray-300",
  gradientPrimary: "from-purple-600 via-pink-600 to-blue-600",
  shadow: "shadow-2xl",
};

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
    setStars(
      Array.from({ length: 120 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        intensity: 0.3 + Math.random() * 0.7,
        delay: Math.random() * 8,
      }))
    );
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-purple-950 to-black -z-10" />
    );
  }

  return (
    <>
      <style jsx>{`
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
        .star-field {
          animation: star-twinkle 6s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .star-field {
            animation: none !important;
          }
        }
      `}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black" />
        <div className="absolute inset-0">
          {stars.map((s) => (
            <div
              key={s.id}
              className="star-field absolute rounded-full bg-white"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                opacity: s.intensity,
                animationDelay: `${s.delay}s`,
                boxShadow: `0 0 ${s.size * 2}px rgba(255,255,255,${
                  s.intensity * 0.5
                })`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-3xl top-1/4 left-1/4" />
          <div className="absolute w-80 h-80 bg-blue-600 rounded-full blur-3xl bottom-1/3 right-1/4" />
          <div className="absolute w-64 h-64 bg-pink-600 rounded-full blur-3xl top-1/2 left-1/2" />
        </div>
      </div>
    </>
  );
}

export default function ComingSoonGate() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function unlock() {
    if (!username || !password || submitting) return;
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.message || "Invalid credentials");
        return;
      }

      // Cookie set; middleware now allows access.
      window.location.href = "/";
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") unlock();
  }

  return (
    <div className="min-h-[100svh] text-white relative flex items-center justify-center px-4">
      <GalaxyBackground />

      <div className="w-full max-w-xl">
        <div className="relative group">
          <div
            className={`absolute -inset-1 bg-gradient-to-r ${TOKENS.gradientPrimary} ${TOKENS.radii.card} blur opacity-25 group-hover:opacity-40 transition duration-1000`}
          />
          <div
            className={`relative ${TOKENS.cardBg} ${TOKENS.border} ${TOKENS.radii.card} p-10 ${TOKENS.shadow}`}
          >
            <div className="text-center space-y-6 mb-8">
              <h1 className="text-5xl md:text-6xl font-black">
                <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  NeximusAI
                </span>
              </h1>
              <p className="text-lg md:text-xl text-purple-200 font-medium">
                Gaming in the AI Era
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto" />
              <p className={`${TOKENS.textSubtle}`}>
                We&apos;re crafting something special. Access for crew only.
              </p>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                autoComplete="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={onKeyDown}
                className="w-full px-5 py-4 bg-black/60 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                aria-label="Username"
              />
              <input
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={onKeyDown}
                className="w-full px-5 py-4 bg-black/60 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                aria-label="Password"
              />
              <button
                onClick={unlock}
                disabled={submitting || !username || !password}
                className={`relative w-full px-8 py-4 bg-gradient-to-r ${TOKENS.gradientPrimary} text-white font-bold rounded-2xl transition-all hover:scale-[1.02] disabled:opacity-60 ${TOKENS.shadow}`}
                aria-busy={submitting}
              >
                {submitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
                ) : (
                  "Enter"
                )}
              </button>

              {error && (
                <p
                  className="text-sm text-rose-300 text-center mt-2"
                  role="alert"
                  aria-live="assertive"
                >
                  {error}
                </p>
              )}
            </div>

            <p className="text-xs text-gray-400 mt-6 text-center">
              Crew login only. Site is hidden from search.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8 opacity-80">
          <div className="w-8 h-12 border-2 border-purple-400/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
