"use client";

import { Brain, Search, Target, MapPin, ImageIcon, Puzzle, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Vector Embeddings",
    description: "Images are converted into mathematical vectors that capture visual meaning. This allows AI to understand your content semantically—not just keyword match. Your images become searchable by concept, not just filename.",
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

const highlights = [
  { icon: Search, label: "Vector Embeddings", desc: "Semantic AI understanding" },
  { icon: Zap, label: "Lightning Fast", desc: "Optimized performance" },
  { icon: Shield, label: "AI Visible", desc: "ChatGPT & Claude ready" },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="badge mb-4">Powerful Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Everything You Need for{" "}
            <span className="text-blue-600">AI Visibility</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Make your images visible to AI assistants like ChatGPT and Claude. 
            SmartPics automatically optimizes every aspect of your images.
          </p>
        </div>

        {/* Highlights Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {highlights.map((item) => (
            <div key={item.label} className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-slate-900 font-semibold">{item.label}</div>
                <div className="text-sm text-slate-600">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card group"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
