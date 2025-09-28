// app/coming-soon/page.tsx
import type { Metadata } from "next";
import ComingSoonGate from "./ComingSoonGate";

export const metadata: Metadata = {
  title: "Coming Soon | NeximusAI",
  robots: { index: false, follow: false },
};

export default function Page() {
  // Server component wrapper; no "use client" here.
  return <ComingSoonGate />;
}
