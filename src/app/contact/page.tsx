"use client";

import { useState } from "react";
import { Metadata } from "next";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { Mail, MessageSquare, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-purple-400 mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-white/70">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                    <p className="text-white/60 mb-2">For general inquiries and support:</p>
                    <a href="mailto:hello@smartpics.ai" className="text-purple-400 hover:text-purple-300">
                      hello@smartpics.ai
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
                    <p className="text-white/60">
                      Available Monday-Friday<br />
                      9:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer text-white/80 hover:text-white">
                      <span>How do I install the plugin?</span>
                      <span className="transition group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-2 text-white/60 text-sm">
                      Install directly from your WordPress admin panel or upload the plugin files manually.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer text-white/80 hover:text-white">
                      <span>What payment methods do you accept?</span>
                      <span className="transition group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-2 text-white/60 text-sm">
                      We accept all major credit cards, PayPal, and bank transfers for annual plans.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer text-white/80 hover:text-white">
                      <span>Can I upgrade or downgrade my plan?</span>
                      <span className="transition group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-2 text-white/60 text-sm">
                      Yes, you can change your plan at any time. Changes take effect immediately.
                    </p>
                  </details>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-strong rounded-2xl p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Subject
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50"
                    >
                      <option value="" className="bg-[#0a0a1a]">Select a subject</option>
                      <option value="general" className="bg-[#0a0a1a]">General Inquiry</option>
                      <option value="support" className="bg-[#0a0a1a]">Technical Support</option>
                      <option value="sales" className="bg-[#0a0a1a]">Sales</option>
                      <option value="partners" className="bg-[#0a0a1a]">Partnerships</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button type="submit" className="w-full btn-primary py-4 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/70">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
