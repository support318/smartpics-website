"use client";

import { motion } from "framer-motion";

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
    <section className="py-20 relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-white/60 text-sm uppercase tracking-wider font-medium">
            Trusted by 10,000+ WordPress Sites
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="group relative">
                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl font-bold text-white/40 group-hover:text-white/80 group-hover:bg-white/10 transition-all duration-300">
                  {company.logo}
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/40 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
