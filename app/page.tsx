"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, ReactNode } from "react";

// Types for reusables
interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}
interface RoadmapPhaseProps {
  phase: string;
  title: string;
  children: ReactNode;
}

// Reusable Components
function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`max-w-7xl mx-auto py-24 px-6 sm:px-8 ${className}`}
    >
      {children}
    </section>
  );
}

function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-4xl sm:text-5xl font-bold text-indigo-400 mb-12 tracking-tight">
      {children}
    </h2>
  );
}

function SectionText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-lg text-gray-300 leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

function CtaButton({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-lg font-bold rounded-full shadow-lg transition-all hover:-translate-y-1 ${className}`}
    >
      {children}
    </Link>
  );
}

function RoadmapPhase({ phase, title, children }: RoadmapPhaseProps) {
  return (
    <div className="p-8 bg-gradient-to-r from-[#151515] via-black to-[#1b1b1b] rounded-xl shadow-2xl border border-gray-800 hover:shadow-purple-800 transition-transform hover:-translate-y-1">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-purple-500/20 text-purple-300 rounded-lg px-4 py-2 text-sm font-bold">
          PHASE {phase}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <ul className="space-y-3 pl-6 list-disc text-gray-200">{children}</ul>
    </div>
  );
}

// A new AboutCard component with a style similar to Roadmap cards
function AboutCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      className="p-8 bg-gradient-to-r from-[#151515] via-black to-[#1b1b1b] 
                  rounded-xl shadow-2xl border border-gray-800 
                  hover:shadow-purple-800 transition-transform hover:-translate-y-1"
    >
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-lg text-gray-300 leading-relaxed">{children}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="">
      {/* HERO SECTION - Full screen */}
      <div
        id="home"
        className="w-full min-h-screen flex flex-col items-center justify-center px-6 text-center pt-28"
      >
        <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          NeximusAI
        </h1>
        <p className="mt-6 text-lg sm:text-2xl text-gray-300 font-medium max-w-2xl mx-auto">
          Connecting the Next Generation to Maximus Innovation
        </p>
        <CtaButton href="#announcements" className="mt-10">
          Get Started
        </CtaButton>

        {/* Anna Image Below Hero Text */}
        <div className="mt-12 w-full max-w-4xl mx-auto">
          <Image
            src="/Anna.png"
            alt="Anna Project"
            width={1200}
            height={1000}
            className="object-cover rounded-xl shadow-2xl border border-gray-800"
          />
        </div>
      </div>

      {/* ANNOUNCEMENTS SECTION */}
      <Section id="announcements">
        <SectionHeader>Announcements</SectionHeader>
        <SectionText>
          Stay tuned for all the latest updates and announcements regarding
          NeximusAI and the ANNA project. Our development team is constantly
          pushing boundaries to enhance user experiences.
        </SectionText>
      </Section>

      {/* ROADMAP SECTION */}
      <Section id="roadmap">
        <SectionHeader>Roadmap</SectionHeader>
        <SectionText className="mb-8">
          Here’s a glimpse of what’s coming soon as we continue to evolve
          NeximusAI:
        </SectionText>
        <div className="grid gap-8 sm:grid-cols-2">
          <RoadmapPhase phase="1" title="Initial Launch">
            <li>Adaptive Language Learning Modules</li>
            <li>Real-Time Conversational Practice</li>
            <li>Community Feedback & Beta Testing</li>
          </RoadmapPhase>
          <RoadmapPhase phase="2" title="Future Expansion">
            <li>Cultural Simulations & Life-Skills</li>
            <li>Multiplayer Collaboration</li>
            <li>Cloud & Local AI Integration</li>
          </RoadmapPhase>
        </div>
      </Section>

      {/* ABOUT SECTION with AboutCard-based layout */}
      <Section id="about">
        <SectionHeader>About the ANNA Project</SectionHeader>

        {/* Responsive grid of AboutCards */}
        <div className="grid gap-8 sm:grid-cols-2">
          <AboutCard title="Mission of the project">
            The mission of the ANNA project is to revolutionize language
            learning through the innovative use of AI technologies. This
            includes adaptive systems that tailor learning experiences to
            individual needs, natural language processing to facilitate
            realistic and meaningful interactions, and neural networks to
            provide dynamic and responsive feedback. By integrating these
            advanced technologies, ANNA aims to create highly personalized,
            immersive, and engaging educational experiences that make language
            acquisition more effective and enjoyable. The project also
            emphasizes cultural assimilation, seamlessly fitting language
            learning into a life simulation game to provide a holistic
            understanding of both language and culture.
          </AboutCard>

          <AboutCard title="AI Integration">
            AI integration in the ANNA project enhances language learning by
            employing advanced adaptive natural language processing (NLP). NLP
            allows for real-time language translation and conversational
            practice with NPCs, making interactions meaningful and contextually
            relevant. Neural networks analyze user inputs and surroundings to
            provide dynamic feedback and personalized educational content. This
            is achieved through the use of both local and cloud-based AI,
            including advanced models like ChatGPT, to create an immersive,
            engaging, and responsive learning environment that adapts to the
            needs of each learner.
          </AboutCard>

          <AboutCard title="ANNA Methodology">
            The ANNA methodology combines scientific and psychological aspects
            to create a personalized and immersive language learning experience.
            Using AI technology, the approach is rooted in principles of
            neuroplasticity, enhancing the brain's ability to form new neural
            connections, and fostering a learning environment that reduces
            anxiety and boosts confidence through interactive and contextually
            meaningful activities.
          </AboutCard>

          <AboutCard title="Style & Story">
            The ANNA project features a dynamic captivating story that immerses
            players in culturally rich environments, encouraging language
            learning through interactive scenarios and engaging tasks. The
            graphics are designed in a charming pixel art style, creating a
            visually appealing and nostalgic experience that appeals to a wide
            audience.
          </AboutCard>
        </div>
      </Section>

      {/* CONTACT SECTION */}
      <Section id="contact" className="text-center">
        <SectionHeader>Contact Us</SectionHeader>
        <SectionText className="max-w-2xl mx-auto">
          Have questions, feedback, or want to collaborate? Reach out and join
          our growing community of AI explorers.
        </SectionText>
        <CtaButton href="/contact" className="mt-8">
          Get in Touch
        </CtaButton>
      </Section>
    </div>
  );
}
