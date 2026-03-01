"use client";

import { ImageIcon, Users, Globe, Zap } from "lucide-react";

const stats = [
  {
    icon: ImageIcon,
    value: "5M+",
    label: "Images Optimized",
    description: "And counting every day",
  },
  {
    icon: Users,
    value: "10K+",
    label: "Active Sites",
    description: "Trust SmartPics daily",
  },
  {
    icon: Globe,
    value: "99%",
    label: "AI Visibility",
    description: "Average improvement",
  },
  {
    icon: Zap,
    value: "80%",
    label: "Faster Loading",
    description: "With WebP & AVIF",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="badge mb-4">Proven Results</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Making Images{" "}
            <span className="text-blue-600">AI-Visible</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join thousands of WordPress sites already optimizing their images for the AI era.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 mb-4">
                <stat.icon className="w-7 h-7 text-blue-600" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">
                {stat.label}
              </h3>
              <p className="text-slate-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
