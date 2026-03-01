"use client";

import { Brain, Search, Target, MapPin, ImageIcon, Puzzle } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Vector Embeddings",
    description: "Images are converted into mathematical vectors that capture visual meaning. This allows AI to understand your content semantically.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Brain,
    title: "AI-Powered Alt Text",
    description: "Advanced AI automatically generates descriptive, SEO-friendly alt text for every image. No configuration needed.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Target,
    title: "Focus Keyword Integration",
    description: "Automatically incorporates your post's focus keyword into image alt text for maximum SEO impact.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: MapPin,
    title: "Smart Geotagging",
    description: "Preserves and enhances location data in images. Perfect for local SEO and travel blogs.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: ImageIcon,
    title: "Smart Format Conversion",
    description: "Automatic WebP & AVIF conversion with intelligent fallback. Reduce file sizes by up to 80%.",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: Puzzle,
    title: "SEO Plugin Integration",
    description: "Works seamlessly with RankMath, Yoast, and other popular SEO plugins. Zero configuration needed.",
    color: "bg-emerald-100 text-emerald-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need for <span className="text-blue-600">AI Visibility</span>
          </h2>
          <p className="text-lg text-slate-600">
            Make your images visible to AI assistants like ChatGPT and Claude.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group"
            >
              <div className={`w-10 h-10 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
