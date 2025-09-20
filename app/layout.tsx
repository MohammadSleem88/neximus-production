// Update your app/layout.tsx
"use client";
import { ClerkProvider } from "@clerk/nextjs";
import "@/app/ui/global.css";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import MegaFooter from "@/app/components/MegaFooter";
import CookieConsent from "@/app/components/CookieConsent";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Keep your dark mode state if you want to toggle .dark class on <html>
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  return (
    <ClerkProvider>
      <html lang="en" className={isDarkMode ? "dark" : ""}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="NeximusAI - France-based AI-first studio integrating advanced AI into immersive, innovative interactive experiences."
          />
          <meta
            name="keywords"
            content="AI gaming, interactive experiences, game development, artificial intelligence, France"
          />
          <title>NeximusAI - Gaming in the AI Era</title>

          {/* Open Graph meta tags */}
          <meta
            property="og:title"
            content="NeximusAI - Gaming in the AI Era"
          />
          <meta
            property="og:description"
            content="France-based AI-first studio integrating advanced AI into immersive, innovative interactive experiences."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://neximusai.com" />

          {/* Twitter Card meta tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="NeximusAI - Gaming in the AI Era"
          />
          <meta
            name="twitter:description"
            content="France-based AI-first studio integrating advanced AI into immersive, innovative interactive experiences."
          />
        </head>
        <body
          className={`
            ${inter.className}
            min-h-screen
            flex flex-col
            transition-colors
            bg-slate-100 text-black
            dark:bg-black dark:text-white
          `}
        >
          {/* Fixed Navbar at the top */}
          <Navbar />

          {/* This container grows to push footer down, and has top padding 
              so the content is not hidden behind the fixed navbar */}
          <div className="pt-20 flex-1">{children}</div>

          {/* Footer at the bottom */}
          <MegaFooter />

          {/* Cookie Consent Banner */}
          <CookieConsent />
        </body>
      </html>
    </ClerkProvider>
  );
}
