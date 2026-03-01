"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, ImageIcon, Sparkles, Shield, Gauge } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 w-full">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-600/15 rounded-full blur-[120px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-white/90">
                AI-Powered Image Optimization
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]"
            >
              Make Your WordPress Images
              <span className="block mt-2 gradient-text">AI-Search Ready</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-white/70 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              ChatGPT and AI assistants can't see images—they read text. SmartPics automatically 
              generates SEO-optimized alt text, converts to WebP/AVIF, and makes your content 
              discoverable in the age of AI search.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <a href="#pricing" className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow">
                <Zap className="w-5 h-5" />
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                onClick={() => alert("Demo video coming soon!")}
                className="btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-4"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8"
            >
              {[
                { value: "80%", label: "Faster Load" },
                { value: "10K+", label: "Active Sites" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-base text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Background Glow */}
            <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/30 via-blue-600/20 to-cyan-600/30 rounded-[3rem] blur-3xl opacity-60" />
            
            {/* Main Dashboard Card */}
            <div className="relative glass-strong rounded-3xl p-8 border border-white/10 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-lg">
                    <ImageIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">SmartPics Dashboard</div>
                    <div className="text-base text-white/50">WordPress Plugin</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: ImageIcon, label: "Optimized", value: "2,847", color: "from-purple-600 to-purple-400" },
                  { icon: Gauge, label: "Saved", value: "1.2GB", color: "from-blue-600 to-blue-400" },
                  { icon: Shield, label: "AI-Ready", value: "100%", color: "from-green-600 to-green-400" },
                ].map((card, index) => (
                  <div key={index} className="glass rounded-2xl p-4 text-center">
                    <div className={`w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}>
                      <card.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white">{card.value}</div>
                    <div className="text-sm text-white/60 mt-1">{card.label}</div>
                  </div>
                ))}
              </div>

              {/* Image List */}
              <div className="space-y-3">
                {[
                  { name: "hero-banner.jpg", before: "2.4MB", after: "340KB", status: "Optimized" },
                  { name: "product-shot.png", before: "1.8MB", after: "220KB", status: "Optimized" },
                  { name: "team-photo.jpg", before: "3.2MB", after: "480KB", status: "Processing" },
                ].map((item, index) => (
                  <div key={index} className="glass rounded-xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-500/20 flex items-center justify-center">
                      <ImageIcon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-base font-medium truncate">{item.name}</div>
                      <div className="flex items-center gap-2 text-sm text-white/50 mt-1">
                        <span className="line-through">{item.before}</span>
                        <ArrowRight className="w-3 h-3" />
                        <span className="text-green-400 font-medium">{item.after}</span>
                      </div>
                    </div>
                    <span className={`text-sm px-3 py-1.5 rounded-full font-medium ${
                      item.status === "Optimized" 
                        ? "bg-green-500/20 text-green-400" 
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-20"
        >
          {[
            "Vector Embeddings",
            "Focus Keyword Integration", 
            "Smart Geotagging",
            "WebP & AVIF",
            "AI-Ready Alt Text",
            "WordPress Native",
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full glass hover:bg-white/10 transition-colors cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
              <span className="text-base text-white/80">{feature}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
