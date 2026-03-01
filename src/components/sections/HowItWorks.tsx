"use client";

import { Upload, Brain, Target, MapPin } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Images",
    description: "Simply upload images to your WordPress media library like you normally would. SmartPics automatically detects new images and begins optimization instantly.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Brain,
    title: "AI Processing & Vector Embeddings",
    description: "Our advanced AI analyzes each image, generates descriptive alt text, and creates vector embeddings for semantic understanding.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Target,
    title: "Focus Keyword Integration",
    description: "SmartPics intelligently incorporates your post or page's focus keyword into image alt text and descriptions.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: MapPin,
    title: "Smart Geotagging & Delivery",
    description: "Preserves and enhances location data for local SEO benefits. Images are automatically converted to WebP/AVIF formats.",
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="badge mb-4">Fully Automatic</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How It <span className="text-blue-600">Works</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            SmartPics works silently in the background. Just upload your images and let our AI handle the rest.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-6 mb-12 last:mb-0">
              {/* Step Number & Icon */}
              <div className="flex-shrink-0 relative">
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-16 w-0.5 h-12 -translate-x-1/2 bg-slate-200" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
