"use client";

import { useState, useEffect } from "react";

// Type definitions
type GameType = "vault" | "worlds" | null;

interface TypeWriterProps {
  text: string;
  delay?: number;
  startDelay?: number;
  onComplete?: () => void;
}

interface RainDrop {
  id: number;
  left: number;
  delay: number;
  duration: number;
  char: string;
}

// Digital Rain Component - handles random values client-side only
const DigitalRain: React.FC = () => {
  const [rainDrops, setRainDrops] = useState<RainDrop[]>([]);

  useEffect(() => {
    // Generate random values only on client side
    const drops: RainDrop[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 10,
      char: String.fromCharCode(65 + Math.floor(Math.random() * 26)),
    }));
    setRainDrops(drops);
  }, []);

  if (rainDrops.length === 0) {
    // Return empty during SSR and initial render
    return null;
  }

  return (
    <div className="absolute inset-0 opacity-10">
      {rainDrops.map((drop) => (
        <div
          key={drop.id}
          className="absolute text-green-400 text-xs font-mono animate-fall"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
          }}
        >
          {drop.char}
        </div>
      ))}
    </div>
  );
};

// Typing animation component
const TypeWriter: React.FC<TypeWriterProps> = ({
  text,
  delay = 50,
  startDelay = 0,
  onComplete = () => {},
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!isStarted) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [currentIndex, text, delay, isStarted, onComplete]);

  return (
    <span>
      {displayText}
      {currentIndex < text.length && <span className="animate-pulse">_</span>}
    </span>
  );
};

export default function AIWorldsPage() {
  const [currentStory, setCurrentStory] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeGame, setActiveGame] = useState<GameType>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [showPortal, setShowPortal] = useState(false);
  const [vaultTextStage, setVaultTextStage] = useState(0);
  const [worldsTextStage, setWorldsTextStage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Terminal animation on mount
  useEffect(() => {
    const lines = [
      { text: "> Initializing AI WORLDS...", delay: 0 },
      { text: "> Loading neural networks...", delay: 500 },
      { text: "> Establishing consciousness bridge...", delay: 1000 },
      { text: "> Reality matrices online...", delay: 1500 },
      { text: "> Welcome to the future of gaming", delay: 2000 },
    ];

    lines.forEach((line, index) => {
      setTimeout(() => {
        setTerminalLines((prev: string[]) => [...prev, line.text]);
        if (index === lines.length - 1) {
          setTimeout(() => setShowPortal(true), 500);
        }
      }, line.delay);
    });
  }, []);

  const vaultContent = [
    {
      title: "Our First Game",
      text: "A futuristic, sci-fi, ethical, mind-bending puzzle adventure experience—driven by AI systems.",
    },
    {
      title: "Cross the Threshold",
      text: "In a place where the line between thought and matter is thin, imagine a world where every command you issue and action you take rewires the environment—where a companion not only listens but learns from the intent behind your input. This is a living puzzle that forces you to think, experiment, and progress through precise intent.",
    },
    {
      title: "Inside the Vault",
      text: "You will discover a labyrinth of mind-bending chambers inside a Vault beyond our dimensions, and an ancient intelligence that has learned to respond to the rhythm of your intent. Each interaction is a step deeper into a narrative that unravels as you unlock clues, solve logical, spatial, and environmental riddles.",
    },
    {
      title: "What Makes It Unique",
      text: "You are not merely following a story—you are training a machine, learning how to phrase intent, and confronting the ethics of a future where an artificial mind can rival human ingenuity.",
    },
    {
      title: "The Challenge",
      text: "If you crave a game that pushes you to master a precise form of intent, tests your problem-solving skills in a surreal setting, and forces you to confront the future of artificial intelligence, this is the adventure you've been waiting for.",
    },
  ];

  const worldsContent = [
    {
      title: "Flagship Game",
      text: "An AI-driven experience that merges immersive gaming with the craft of living worlds. We're constructing vibrant, living villages from different corners of the world, where each alley and rooftop hides a new adventure.",
    },
    {
      title: "Travel with us",
      text: "Envision strolling through meticulously recreated villages—each one capturing the essence of real-world architecture and local customs. Speak to locals who don't just greet you, but they hear, see, notice, remember, and respond, in authentic and dynamic interactions.",
    },
    {
      title: "Glimpse of Worlds",
      text: "From a quiet lakeside town to a bustling desert oasis—each location is an ever-evolving mosaic of daily life, shaped by specialized intelligence that breathes life into regional customs and rhythms.",
    },
    {
      title: "The Game",
      text: "Features a dynamic captivating story that immerses players in culturally rich environments, with interactive scenarios and engaging quests, filled with classic and brave new game mechanics that respond to your choices.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Matrix-like Background */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-black transition-all duration-1000"
          style={{
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
          }}
        />

        {/* Digital rain effect */}
        <DigitalRain />

        {/* Portal effect when scrolling */}
        <div
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePos.x * 100}% ${
              mousePos.y * 100
            }%, 
              rgba(147, 51, 234, ${scrollProgress * 0.3}) 0%, 
              rgba(79, 70, 229, ${scrollProgress * 0.2}) 50%, 
              transparent 70%)`,
          }}
        />
      </div>

      {/* Hero Section with Terminal */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-6xl mx-auto px-6 w-full">
          {/* Terminal Window */}
          <div className="bg-gray-900/80 backdrop-blur-xl border border-green-400/30 rounded-lg overflow-hidden shadow-2xl mb-8">
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-green-400/20">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-xs text-gray-400 font-mono">
                terminal://ai-worlds
              </span>
            </div>

            <div className="p-6 font-mono text-green-400 text-sm space-y-2">
              {terminalLines.map((line, index) => (
                <div key={index} className="animate-fadeIn">
                  <TypeWriter text={line} delay={30} startDelay={index * 100} />
                </div>
              ))}
            </div>
          </div>

          {/* Portal Title */}
          {showPortal && (
            <div className="text-center space-y-8 animate-fadeIn">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
                </div>

                <h1 className="relative text-8xl md:text-9xl font-black tracking-wider">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                    AI WORLDS
                  </span>
                </h1>
              </div>

              <div className="h-12">
                <TypeWriter
                  text="Enter the portal where code becomes consciousness"
                  delay={50}
                  startDelay={500}
                />
              </div>

              <div className="w-1 h-20 bg-gradient-to-b from-purple-400 to-transparent mx-auto animate-pulse" />
            </div>
          )}
        </div>
      </section>

      {/* Game Selection with Story Terminal */}
      <section className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
              Choose Your Reality
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* The Vault - Story Terminal */}
            <div
              className="relative group cursor-pointer"
              onClick={() => {
                setActiveGame("vault" as GameType);
                setVaultTextStage(0);
              }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative bg-slate-900/90 backdrop-blur-xl border border-cyan-400/30 rounded-2xl overflow-hidden">
                {/* Vault Terminal Header */}
                <div className="bg-slate-800/80 px-4 py-3 border-b border-cyan-400/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-xs font-mono text-cyan-400">
                        VAULT://SYSTEM
                      </span>
                    </div>
                    <span className="text-xs font-mono text-cyan-400/50">
                      // THE VAULT
                    </span>
                  </div>
                </div>

                <div className="p-6 min-h-[400px] font-mono text-sm">
                  {activeGame === "vault" ? (
                    <div className="space-y-4">
                      {vaultContent
                        .slice(0, vaultTextStage + 1)
                        .map((content, index) => (
                          <div key={index} className="animate-fadeIn">
                            <div className="text-cyan-400 mb-2">
                              &gt; {content.title}
                            </div>
                            <div className="text-gray-300 pl-4 leading-relaxed">
                              {index === vaultTextStage ? (
                                <TypeWriter
                                  text={content.text}
                                  delay={20}
                                  onComplete={() => {
                                    if (
                                      vaultTextStage <
                                      vaultContent.length - 1
                                    ) {
                                      setTimeout(
                                        () =>
                                          setVaultTextStage((prev) => prev + 1),
                                        500
                                      );
                                    }
                                  }}
                                />
                              ) : (
                                content.text
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <div className="w-24 h-24 mx-auto mb-6 relative">
                        <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-lg rotate-45 animate-spin-slow" />
                        <div className="absolute inset-2 border border-purple-400/50 rounded-lg -rotate-45 animate-pulse" />
                      </div>
                      <h3 className="text-2xl font-bold text-cyan-300 mb-2">
                        THE VAULT
                      </h3>
                      <p className="text-gray-400">
                        Click to enter the system...
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Living Worlds - Story Terminal */}
            <div
              className="relative group cursor-pointer"
              onClick={() => {
                setActiveGame("worlds" as GameType);
                setWorldsTextStage(0);
              }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative bg-slate-900/90 backdrop-blur-xl border border-emerald-400/30 rounded-2xl overflow-hidden">
                {/* Worlds Terminal Header */}
                <div className="bg-slate-800/80 px-4 py-3 border-b border-emerald-400/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-mono text-emerald-400">
                        WORLDS://ALIVE
                      </span>
                    </div>
                    <span className="text-xs font-mono text-emerald-400/50">
                      // LIVING WORLDS
                    </span>
                  </div>
                </div>

                <div className="p-6 min-h-[400px] font-mono text-sm">
                  {activeGame === "worlds" ? (
                    <div className="space-y-4">
                      {worldsContent
                        .slice(0, worldsTextStage + 1)
                        .map((content, index) => (
                          <div key={index} className="animate-fadeIn">
                            <div className="text-emerald-400 mb-2">
                              &gt; {content.title}
                            </div>
                            <div className="text-gray-300 pl-4 leading-relaxed">
                              {index === worldsTextStage ? (
                                <TypeWriter
                                  text={content.text}
                                  delay={20}
                                  onComplete={() => {
                                    if (
                                      worldsTextStage <
                                      worldsContent.length - 1
                                    ) {
                                      setTimeout(
                                        () =>
                                          setWorldsTextStage(
                                            (prev) => prev + 1
                                          ),
                                        500
                                      );
                                    }
                                  }}
                                />
                              ) : (
                                content.text
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <div className="w-24 h-24 mx-auto mb-6 relative">
                        <div className="absolute inset-0 bg-emerald-400/20 rounded-full animate-pulse" />
                        <div className="absolute inset-4 border-2 border-blue-400/40 rounded-full animate-spin-slow" />
                        <div className="absolute w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-orbit" />
                        <div className="absolute w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-orbit-delayed-1" />
                        <div className="absolute w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-orbit-delayed-2" />
                      </div>
                      <h3 className="text-2xl font-bold text-emerald-300 mb-2">
                        LIVING WORLDS
                      </h3>
                      <p className="text-gray-400">
                        Click to explore the realms...
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Be the First to Know
          </h2>

          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Ready to step into{" "}
            <span className="text-purple-400 font-semibold">
              AI-driven and systems-rich play
            </span>{" "}
            set in living cultural worlds? Join the revolution as we reveal more
            in the months ahead.
          </p>

          <div className="relative group max-w-md mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-700" />
            <div className="relative bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-transparent border-0 border-b border-white/30 focus:border-purple-400 outline-none text-white placeholder-gray-400 pb-2 mb-6 text-center"
              />
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                Enter the Portal
              </button>
              <p className="text-xs text-gray-500 mt-4">
                No spam. Just revolutionary gaming updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fall {
          from {
            transform: translateY(-100vh);
          }
          to {
            transform: translateY(100vh);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(40px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(40px) rotate(-360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-fall {
          animation: fall linear infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -6px;
          margin-left: -6px;
          animation: orbit 3s linear infinite;
        }

        .animate-orbit-delayed-1 {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -6px;
          margin-left: -6px;
          animation: orbit 4s linear infinite;
          animation-delay: 0.33s;
        }

        .animate-orbit-delayed-2 {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -6px;
          margin-left: -6px;
          animation: orbit 5s linear infinite;
          animation-delay: 0.66s;
        }
      `}</style>
    </div>
  );
}
