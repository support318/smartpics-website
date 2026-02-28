"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does the AI generate alt text?",
    answer: "Our AI analyzes your images using computer vision and natural language processing. It identifies objects, scenes, text, and context to generate accurate, descriptive alt text that helps both accessibility and SEO.",
  },
  {
    question: "Will this slow down my website?",
    answer: "No! SmartPics actually speeds up your site by converting images to modern formats like WebP and AVIF, which are 30-50% smaller than JPEGs. The optimization happens in the background.",
  },
  {
    question: "Can I edit the generated alt text?",
    answer: "Absolutely. While our AI generates high-quality descriptions, you have full control to review and edit any alt text before it goes live on your site.",
  },
  {
    question: "How many images can I optimize?",
    answer: "The Free plan includes 50 images per month. Pro plans offer 1,000 images/month, and Business plans have unlimited image optimization.",
  },
  {
    question: "Does it work with my WordPress theme?",
    answer: "Yes! SmartPics works with any WordPress theme and integrates seamlessly with popular page builders like Elementor, Divi, and Gutenberg.",
  },
  {
    question: "Is my data secure?",
    answer: "We take security seriously. Your images are processed securely and never stored permanently. We are GDPR compliant and use enterprise-grade encryption.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-white/90">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-white/70">
            Got questions? We have answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 text-white/70">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
