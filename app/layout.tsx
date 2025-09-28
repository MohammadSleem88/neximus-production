// app/layout.tsx
import { ClerkProvider } from "@clerk/nextjs";
import "@/app/ui/global.css";
import Navbar from "@/app/components/Navbar";
import MegaFooter from "@/app/components/MegaFooter";
import CookieConsent from "@/app/components/CookieConsent";
import { inter } from "@/app/ui/fonts";
import { cookies } from "next/headers";
import type { ReactNode } from "react";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Next 15: cookies() is async
  const cookieStore = await cookies();
  const hasAccess = cookieStore.get("site_access")?.value === "granted";
  const showChrome = !!hasAccess;

  return (
    <ClerkProvider>
      <html lang="en" className="dark">
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

          {/* Open Graph */}
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

          {/* Twitter Card */}
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
            min-h-screen flex flex-col transition-colors
            bg-slate-100 text-black dark:bg-black dark:text-white
          `}
        >
          {showChrome && <Navbar />}

          {/* Add top padding only when the fixed navbar is visible */}
          <div className={showChrome ? "pt-20 flex-1" : "flex-1"}>
            {children}
          </div>

          {showChrome && <MegaFooter />}
          {showChrome && <CookieConsent />}
        </body>
      </html>
    </ClerkProvider>
  );
}
