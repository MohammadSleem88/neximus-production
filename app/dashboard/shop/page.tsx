"use client";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-16">
        <h1 className="text-4xl font-extrabold text-pink-500 uppercase mb-6">
          Shop
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          Discover exclusive content, new releases, and great deals to power up
          your next adventure—without revealing too many secrets.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ShopCard
            title="Video Games"
            description="Embark on AI-enhanced journeys across diverse genres and styles."
          />
          <ShopCard
            title="DLC"
            description="Expand your favorite AI-driven experiences with additional content."
          />
          <ShopCard
            title="Pixel Art"
            description="Collect unique pixel creations that capture nostalgic charm."
          />
          <ShopCard
            title="New Releases"
            description="Stay ahead of the curve with our latest AI-infused game offerings."
          />
          <ShopCard
            title="Pre-Order"
            description="Secure upcoming titles early and get exclusive previews."
          />
          <ShopCard
            title="Deals"
            description="Grab limited-time sales and discounts, updated regularly."
          />
        </div>
      </div>
    </div>
  );
}

/**
 * A reusable card component for each shop category.
 */
function ShopCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        bg-black/60 p-6 rounded-xl shadow-md border border-gray-800
        hover:border-pink-500 transition-colors
      "
    >
      <h2 className="text-xl font-bold text-pink-300 mb-3 uppercase tracking-wide">
        {title}
      </h2>
      <p className="text-gray-300 leading-relaxed mb-6">{description}</p>
      {/* Explore button for future routing */}
      <a
        href="#"
        className="
          inline-block px-4 py-2 text-sm font-semibold 
          bg-pink-600 hover:bg-pink-500 text-white 
          uppercase tracking-wide rounded-sm
          transform hover:-translate-y-0.5 transition-all
        "
      >
        Explore
      </a>
    </div>
  );
}
