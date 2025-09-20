"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function SingleArticlePage() {
  const params = useParams() as { slug?: string };
  const slug = params.slug ?? "unknown-article";

  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    if (!slug) return;

    axios
      .get(`http://localhost:1337/api/blog-posts?slug=${slug}`)
      .then((res) => {
        console.log("Single article response:", res.data);
        // res.data might look like { data: [ ... ], meta: { ... } }
        if (res.data.data && res.data.data.length > 0) {
          setArticle(res.data.data[0]);
        }
      })
      .catch((err) => {
        console.error("Error fetching single article:", err);
      });
  }, [slug]);

  if (!article) {
    return (
      <div className="bg-gradient-to-b from-black via-[#0b0b0b] to-gray-900 text-white min-h-screen flex items-center justify-center">
        <p>Loading article...</p>
      </div>
    );
  }

  const { title, content } = article;
  const contentString = Array.isArray(content)
    ? content
        .map((block: { children?: { text: string }[] }) =>
          block.children?.map((child: { text: string }) => child.text).join("")
        )
        .join("\n")
    : "No content available";

  return (
    <div className="bg-gradient-to-b from-black via-[#0b0b0b] to-gray-900 text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-16">
        <h1 className="text-5xl font-extrabold text-pink-500 uppercase mb-6">
          {title}
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
          {contentString}
        </p>

        <Link
          href="/news"
          className="inline-block px-4 py-2 font-bold text-white 
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
