"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Sparkles, 
  Image as ImageIcon, 
  Brain, 
  Target, 
  MapPin, 
  Puzzle,
  Zap,
  Shield,
  Search
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Alt Text",
    description: "Advanced AI automatically generates descriptive, SEO-friendly alt text for every image. No configuration needed—just install and let it work.",
    color: "#8B5CF6",
    gradient: "from-violet-600 to-purple-600",
  },
  {
    icon: Search,
    title: "Vector Embeddings",
    description: "Semantic understanding through vector embeddings enables intelligent image categorization and improved searchability across your entire media library.",
    color: "#3B82F6",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: Target,
    title: "Focus Keyword Integration",
    description: "Automatically incorporates your post or page's focus keyword into image alt text and descriptions for maximum SEO impact and relevance.",
    color: "#EC4899",
    gradient: "from-pink-600 to-rose-600",
  },
  {
    icon: MapPin,
    title: "Smart Geotagging",
    description: "Preserves and enhances location data in images. Perfect for local SEO, travel blogs, real estate, and location-based businesses.",
    color: "#F59E0B",
    gradient: "from-amber-600 to-orange-600",
  },
  {
    icon: ImageIcon,
    title: "Smart Format Conversion",
    description: "Automatic WebP & AVIF conversion with intelligent fallback. Reduce file sizes by up to 80% without any visible quality loss.",
    color: "#06B6D4",
    gradient: "from-cyan-600 to-teal-600",
  },
  {
    icon: Puzzle,
    title: "SEO Plugin Integration",
    description: "Works seamlessly with RankMath, Yoast, and other popular SEO plugins. Zero configuration needed—it just works.",
    color: "#10B981",
    gradient: "from-emerald-600 to-green-600",
  },
];

const highlights = [
  { icon: Zap, label: "Lightning Fast", desc: "Optimized performance" },
  { icon: Shield, label: "Secure", desc: "Enterprise-grade security" },
  { icon: Search, label: "AI Visible", desc: "ChatGPT & Claude ready" },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div 
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-lg"
        style={{ background: `linear-gradient(135deg, ${feature.color}40, transparent)` }}
      />
      
      {/* Card */}
      <div className="relative glass rounded-2xl p-8 h-full border border-white/5 group-hover:border-white/10 transition-colors">
        {/* Icon */}
        <div 
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
        >
          <feature.icon className="w-7 h-7 text-white" />
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
          {feature.title}
        </h3>
        
        <p className="text-gray-300 leading-relaxed text-base">
          {feature.description}
        </p>

        {/* Hover Line */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

export default function Features() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

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
            className="inline-block px-4 py-2 rounded-full glass text-base font-medium text-purple-400 mb-6"
          >
            Powerful Features
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Everything You Need for{" "}
            <span className="gradient-text">AI Visibility</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Make your images visible to AI assistants like ChatGPT and Claude. 
            SmartPics automatically optimizes every aspect of your images for maximum SEO impact.
          </p>
        </motion.div>

        {/* Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {highlights.map((item, index) => (
            <div key={index} className="glass-strong rounded-xl px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-white font-semibold">{item.label}</div>
                <div className="text-base text-gray-300">{item.desc}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* AI Visibility Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass-strong rounded-2xl p-8 border border-purple-500/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Why AI Visibility Matters</h3>
              <p className="text-gray-300">
                ChatGPT, Claude, and Perplexity read text—not pixels. Images without proper alt text are invisible to AI assistants. 
                SmartPics ensures your products and content are discoverable in the age of AI search.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
