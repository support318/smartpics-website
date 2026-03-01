"use client";

import { useState } from "react";
import { Search, CheckCircle, AlertTriangle, Globe, Shield } from "lucide-react";

export default function FreeScanner() {
  const [url, setUrl] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 2000);
  };

  const features = [
    { icon: Search, text: "Image detection on every page" },
    { icon: AlertTriangle, text: "Missing alt text identification" },
    { icon: Globe, text: "AI visibility scoring" },
    { icon: CheckCircle, text: "Page-by-page breakdown" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Free — No Signup Required
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Check Your{" "}
              <span className="text-blue-600">AI Visibility</span> Score
            </h2>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Our free scanner crawls up to 25 pages and shows you exactly which images 
              ChatGPT, Claude, and Perplexity can't see — with a full breakdown of 
              missing alt text and your overall AI visibility score.
            </p>

            <div className="space-y-4">
              {features.map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Scanner Form */}
          <div className="card p-8">
            {!scanComplete ? (
              <form onSubmit={handleScan} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Enter your website URL
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://yoursite.com"
                      className="input pl-12"
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
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Scanning...
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      Scan My Site Free
                    </>
                  )}
                </button>

                <p className="text-center text-slate-500 text-sm">
                  Results in under 60 seconds
                </p>
              </form>
            ) : (
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100">
                  <Shield className="w-10 h-10 text-green-600" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Scan Complete!
                  </h3>
                  <p className="text-slate-600">
                    We've analyzed your site and sent the report to your email.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setScanComplete(false);
                    setUrl("");
                  }}
                  className="btn-secondary"
                >
                  Scan Another Site
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
