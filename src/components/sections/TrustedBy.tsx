"use client";

import { CheckCircle } from "lucide-react";

const benefits = [
  "WordPress Native",
  "SEO Plugin Compatible", 
  "No Coding Required",
  "5-Minute Setup",
];

export default function TrustedBy() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span className="text-slate-700 font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
