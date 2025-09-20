"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function NewsIndexPage() {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    axios

      .get("http://localhost:1337/api/blog-posts")
      .then((res) => {
        console.log("All articles response:", res.data);

        setArticles(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
      });
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-[#0b0b0b] to-gray-900 text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-16">
        <h1 className="text-5xl font-extrabold text-pink-500 uppercase mb-6">
          News & Updates
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
          Catch the latest articles and behind-the-scenes insights about our
          studio growth, team expansion, AI breakthroughs, and more—without
          spoiling details of our upcoming project.
        </p>

        <div className="space-y-8">
          {articles.map((article) => {
            const { id, title, slug, content } = article;

            const shortExcerpt =
              Array.isArray(content) && content.length > 0
                ? content[0].children?.[0]?.text?.slice(0, 100) + "..."
                : "No content available";

            return (
              <ArticleCard
                key={id}
                slug={slug}
                title={title}
                excerpt={shortExcerpt}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

function ArticleCard({
  slug,
  title,
  excerpt,
}: {
  slug: string;
  title: string;
  excerpt: string;
}) {
  return (
    <div className="bg-black/60 p-6 rounded-xl shadow-md border border-gray-800 hover:border-pink-500 transition-colors">
      <h2 className="text-2xl font-bold text-white mb-2 uppercase">{title}</h2>
      <p className="text-gray-300 leading-relaxed mb-4">{excerpt}</p>
      <Link
        href={`/news/${slug}`}
        className="inline-block px-4 py-2 font-bold text-white bg-pink-600 
          hover:bg-pink-500 uppercase tracking-wide rounded-sm 
          transform hover:-translate-y-0.5 transition-all
        "
      >
        Read More
      </Link>
    </div>
  );
}
