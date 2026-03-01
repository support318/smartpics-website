"use client";

import Link from "next/link";
import { ArrowRight, Play, ImageIcon, Zap, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            AI-Powered Image Optimization
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Make Your WordPress Images{" "}
            <span className="text-blue-600">AI-Search Ready</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Powered by vector embeddings—images become semantic data that AI truly understands. 
            SmartPics converts visuals into searchable concepts, generates SEO-optimized alt text, 
            and optimizes formats so your content appears in AI-powered search results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/pricing"
              className="btn-primary text-lg px-8 py-4"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/how-it-works"
              className="btn-secondary text-lg px-8 py-4"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-900">80%</div>
              <div className="text-slate-600">Faster Load</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-900">10K+</div>
              <div className="text-slate-600">Active Sites</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-900">99.9%</div>
              <div className="text-slate-600">Uptime</div>
            </div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {[
            "Vector Embeddings",
            "Focus Keyword Integration",
            "Smart Geotagging",
            "WebP & AVIF",
            "AI-Ready Alt Text",
            "WordPress Native",
          ].map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
            >
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              {feature}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
