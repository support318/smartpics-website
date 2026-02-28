"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ImageIcon, Users, Globe, Zap } from "lucide-react";

const stats = [
  {
    icon: ImageIcon,
    value: 5000000,
    suffix: "+",
    label: "Images Optimized",
    description: "And counting every day",
  },
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Active Sites",
    description: "Trust SmartPics daily",
  },
  {
    icon: Globe,
    value: 99,
    suffix: "%",
    label: "AI Visibility",
    description: "Average improvement",
  },
  {
    icon: Zap,
    value: 80,
    suffix: "%",
    label: "Faster Loading",
    description: "With WebP & AVIF",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K";
    }
    return num.toString();
  };

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold gradient-text">
      {formatNumber(count)}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-purple-400 mb-6">
            Proven Results
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Making Images <span className="gradient-text">AI-Visible</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Join thousands of WordPress sites already optimizing their images for the AI era.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 mb-6">
                <stat.icon className="w-7 h-7 text-purple-400" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <h3 className="text-lg font-semibold text-white mt-4 mb-1">
                {stat.label}
              </h3>
              <p className="text-white/50 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
