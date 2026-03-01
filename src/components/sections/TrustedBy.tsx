"use client";

const companies = [
  { name: "WordPress", logo: "W" },
  { name: "WooCommerce", logo: "WC" },
  { name: "Shopify", logo: "S" },
  { name: "Elementor", logo: "E" },
  { name: "Yoast SEO", logo: "Y" },
  { name: "RankMath", logo: "R" },
  { name: "Divi", logo: "D" },
  { name: "WPEngine", logo: "WP" },
];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-600 text-sm uppercase tracking-wider font-semibold mb-10">
          Trusted by 10,000+ WordPress Sites
        </p>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-6 items-center">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-xl font-bold text-slate-700 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300">
                {company.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
