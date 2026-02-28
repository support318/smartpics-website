"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Upload, Brain, Target, MapPin, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Images",
    description: "Simply upload images to your WordPress media library like you normally would. SmartPics automatically detects new images and begins optimization instantly—no manual intervention required.",
    color: "#8B5CF6",
    gradient: "from-violet-600 to-purple-600",
  },
  {
    icon: Brain,
    title: "AI Processing & Vector Embeddings",
    description: "Our advanced AI analyzes each image, generates descriptive alt text, and creates vector embeddings for semantic understanding. The system automatically handles everything behind the scenes.",
    color: "#3B82F6",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: Target,
    title: "Focus Keyword Integration",
    description: "SmartPics intelligently incorporates your post or page's focus keyword into image alt text and descriptions. This ensures maximum SEO relevance and helps search engines understand your content context.",
    color: "#EC4899",
    gradient: "from-pink-600 to-rose-600",
  },
  {
    icon: MapPin,
    title: "Smart Geotagging & Delivery",
    description: "Preserves and enhances location data for local SEO benefits. Images are automatically converted to WebP/AVIF formats and served with AI-ready metadata for maximum visibility.",
    color: "#06B6D4",
    gradient: "from-cyan-600 to-teal-600",
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="relative"
    >
      <div className="flex items-start gap-6">
        {/* Step Number & Icon */}
        <div className="flex-shrink-0 relative">
          <div 
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}
          >
            <step.icon className="w-8 h-8 text-white" />
          </div>
          
          {/* Step Number Badge */}
          <div 
            className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white"
            style={{ background: step.color }}
          >
            {index + 1}
          </div>

          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div className="absolute left-1/2 top-16 w-0.5 h-24 -translate-x-1/2 bg-gradient-to-b from-gray-700 to-transparent hidden md:block" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-12">
          <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
          <p className="text-white/80 leading-relaxed">{step.description}</p>
          
          {/* Visual Element */}
          <div className="mt-4 glass rounded-xl p-4 inline-flex items-center gap-3">
            <div 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: step.color }}
            />
            <span className="text-sm text-white/70">
              {index === 0 && "Automatic detection"}
              {index === 1 && "Behind-the-scenes AI"}
              {index === 2 && "SEO-optimized output"}
              {index === 3 && "Instant delivery"}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-cyan-400 mb-6"
          >
            Fully Automatic
          </motion.span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            SmartPics works silently in the background. Just upload your images and let our AI handle the rest—no configuration, no manual steps, no hassle.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Steps */}
          <div className="max-w-lg">
            {steps.map((step, index) => (
              <StepCard key={step.title} step={step} index={index} />
            ))}
          </div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-3xl blur-2xl" />
            
            {/* Integration Visual */}
            <div className="relative glass-strong rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-6">
                <div className="text-white font-semibold text-lg mb-2">WordPress + SmartPics</div>
                <div className="text-sm text-white/60">Seamless integration in minutes</div>
              </div>

              {/* Integration Flow */}
              <div className="space-y-4">
                {[
                  { label: "WordPress Media Library", status: "connected", color: "bg-blue-500" },
                  { label: "SmartPics AI Engine", status: "automatic", color: "bg-purple-500" },
                  { label: "AI-Visible Images", status: "ready", color: "bg-green-500" },
                ].map((item, index) => (
                  <div key={index} className="glass rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${item.color} ${item.status === 'automatic' ? 'animate-pulse' : ''}`} />
                      <span className="text-white font-medium">{item.label}</span>
                    </div>
                    <span className="text-xs text-white/60 capitalize">{item.status}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="glass rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">2 min</div>
                  <div className="text-xs text-white/60">Setup Time</div>
                </div>
                <div className="glass rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">Zero</div>
                  <div className="text-xs text-white/60">Manual Work</div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 border border-green-500/30"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-white">AI Visibility Active</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a href="#pricing" className="btn-primary inline-flex items-center gap-2">
            Start Optimizing Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
