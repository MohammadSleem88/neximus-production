"use client";
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
  // Manage dark vs. light mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  return (
    // Instead of "translate-x..." or "bg-blue-500", we apply "dark" class conditionally:
    <html lang="en" className={isDarkMode ? "dark" : ""}>
      <body
        className={`
          ${inter.className}
          min-h-screen
          transition-colors
          // Light mode
          bg-slate-100 text-black
          // Dark mode
          dark:bg-black dark:text-white
        `}
      >
        {/* Now the Navbar can call setIsDarkMode(!isDarkMode) to toggle the .dark class on <html> */}
        {/* <Navbar/> isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> */}
        <Navbar />
        <main>{children}</main>

        <MegaFooter />
      </body>
    </html>
  );
}
