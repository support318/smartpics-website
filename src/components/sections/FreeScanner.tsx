"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Zap, Shield, CheckCircle, AlertTriangle, Globe } from "lucide-react";

export default function FreeScanner() {
  const [url, setUrl] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setIsScanning(true);
    // Simulate scan
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 2000);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-base font-medium text-green-400 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Free — No Signup Required
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Check Your <span className="gradient-text">AI Visibility</span> Score
            </h2>

            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Our free scanner crawls up to 25 pages and shows you exactly which images 
              ChatGPT, Claude, and Perplexity can't see — with a full breakdown of 
              missing alt text and your overall AI visibility score.
            </p>

            <div className="space-y-4">
              {[
                { icon: Search, text: "Image detection on every page" },
                { icon: AlertTriangle, text: "Missing alt text identification" },
                { icon: Globe, text: "AI visibility scoring" },
                { icon: CheckCircle, text: "Page-by-page breakdown" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-white/80">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Scanner Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-strong rounded-2xl p-8 border border-white/10">
              {!scanComplete ? (
                <form onSubmit={handleScan} className="space-y-6">
                  <div>
                    <label className="block text-base font-medium text-white/80 mb-2">
                      Enter your website URL
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://yoursite.com"
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isScanning}
                    className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isScanning ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Zap className="w-5 h-5" />
                        </motion.div>
                        Scanning...
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5" />
                        Scan My Site Free
                      </>
                    )}
                  </button>

                  <p className="text-center text-white/50 text-base">
                    Results in under 60 seconds
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-600">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Scan Complete!
                    </h3>
                    <p className="text-white/70">
                      We found 12 images on your site. Here's your AI visibility report:
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-yellow-400 mb-1">38%</div>
                      <div className="text-base text-white/60">Missing Alt Text</div>
                      <div className="text-sm text-yellow-400 mt-1">Critical</div>
                    </div>
                    <div className="glass rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-red-400 mb-1">HIGH</div>
                      <div className="text-base text-white/60">SEO Impact</div>
                      <div className="text-sm text-red-400 mt-1">At Risk</div>
                    </div>
                  </div>

                  <div className="glass rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/80">Pages Scanned</span>
                      <span className="text-white font-semibold">25</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Images Found</span>
                      <span className="text-white font-semibold">142</span>
                    </div>
                  </div>

                  <button
                    onClick={() => { setScanComplete(false); setUrl(""); }}
                    className="btn-secondary w-full py-3"
                  >
                    Scan Another Site
                  </button>
                </motion.div>
              )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
