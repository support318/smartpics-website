"use client";

import Link from "next/link";
import { ArrowRight, Play, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            AI-Powered Image Optimization
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Make Your WordPress Images{" "}
            <span className="text-blue-600">AI-Search Ready</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Powered by vector embeddings—images become semantic data that AI truly understands. 
            SmartPics converts visuals into searchable concepts and generates SEO-optimized alt text.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-3 transition-colors w-full sm:w-auto"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-lg px-6 py-3 border border-slate-200 transition-colors w-full sm:w-auto"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">80%</div>
              <div className="text-sm text-slate-600">Faster Load</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">10K+</div>
              <div className="text-sm text-slate-600">Active Sites</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">99.9%</div>
              <div className="text-sm text-slate-600">Uptime</div>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Vector Embeddings",
              "Focus Keywords",
              "WebP & AVIF",
              "WordPress Native",
            ].map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-sm"
              >
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
