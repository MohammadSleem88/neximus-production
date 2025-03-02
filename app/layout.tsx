"use client";
import { ClerkProvider } from "@clerk/nextjs";
import "@/app/ui/global.css";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import MegaFooter from "@/app/components/MegaFooter";
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
        </body>
      </html>
    </ClerkProvider>
  );
}
