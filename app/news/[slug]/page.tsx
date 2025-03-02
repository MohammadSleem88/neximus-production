"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function SingleArticlePage() {
  // `useParams()` may return undefined or missing props, so we safely handle that:
  const params = useParams() as { slug?: string };
  const slug = params.slug ?? "unknown-article";

  // In a real scenario, you might fetch an article from an API or local data based on `slug`
  const displayTitle = slug.replace("-", " ");

  return (
    <div className="bg-gradient-to-b from-black via-[#0b0b0b] to-gray-900 text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-16">
        <h1 className="text-5xl font-extrabold text-pink-500 uppercase mb-6">
          {displayTitle}
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
          {/* Placeholder body text. In reality, you'd pull data from a CMS or other source. */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere
          neque eget nulla accumsan, eget ornare arcu aliquam. Nulla facilisi.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. In vel libero eget urna condimentum eleifend
          non at turpis...
        </p>

        <Link
          href="/news"
          className="
            inline-block px-4 py-2 font-bold text-white 
            bg-gray-700 hover:bg-gray-600 uppercase 
            tracking-wide rounded-sm
            transform hover:-translate-y-0.5 
            transition
          "
        >
          ← Back to News
        </Link>
      </section>
    </div>
  );
}
