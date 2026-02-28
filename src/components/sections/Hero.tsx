"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, ImageIcon, Sparkles, Shield, Gauge } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 w-full">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[150px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-white/90">
                Make Your Images AI-Visible
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
            >
              Transform Your WordPress Images with{" "}
              <span className="gradient-text">AI-Powered</span> Optimization
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              ChatGPT and AI assistants can't see images—they read text. SmartPics automatically 
              generates SEO-optimized alt text, converts to WebP/AVIF, and makes your content 
              discoverable in the age of AI search.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#pricing" className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4 shadow-lg shadow-purple-500/20">
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: "80%", label: "Faster Load" },
                { value: "10K+", label: "Active Sites" },
                { value: "AI-Ready", label: "Alt Text" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Main Dashboard Mockup */}
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-2xl" />
              
              {/* Main Card */}
              <div className="relative glass-strong rounded-2xl p-6 border border-white/10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
                      <ImageIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">SmartPics Dashboard</div>
                      <div className="text-sm text-white/60">WordPress Plugin</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { icon: ImageIcon, label: "Optimized", value: "2,847", color: "from-purple-600 to-purple-400" },
                    { icon: Gauge, label: "Saved", value: "1.2GB", color: "from-blue-600 to-blue-400" },
                    { icon: Shield, label: "AI-Ready", value: "100%", color: "from-green-600 to-green-400" },
                  ].map((card, index) => (
                    <div key={index} className="glass rounded-xl p-4 text-center">
                      <div className={`w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                        <card.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-xl font-bold text-white">{card.value}</div>
                      <div className="text-xs text-white/60">{card.label}</div>
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
                    <div key={index} className="glass rounded-lg p-3 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-500/20 flex items-center justify-center">
                        <ImageIcon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-sm font-medium truncate">{item.name}</div>
                        <div className="flex items-center gap-2 text-xs text-white/60">
                          <span>{item.before}</span>
                          <ArrowRight className="w-3 h-3" />
                          <span className="text-green-400">{item.after}</span>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
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

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -right-8 top-20 glass rounded-xl p-4 border border-purple-500/30"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-xs text-white/80">AI Alt Text Generated</span>
                </div>
                <div className="text-sm text-white">"Professional product photography..."</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -left-8 bottom-20 glass rounded-xl p-4 border border-blue-500/30"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Gauge className="w-4 h-4 text-blue-400" />
                  <span className="text-xs text-white/80">Vector Embedding</span>
                </div>
                <div className="text-2xl font-bold text-white">Semantic</div>
                <div className="text-xs text-white/60">Image Search Ready</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3 mt-16"
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
              className="flex items-center gap-2 px-4 py-2 rounded-full glass"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
              <span className="text-sm text-white/80">{feature}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a1a] to-transparent z-10" />
    </section>
  );
}
