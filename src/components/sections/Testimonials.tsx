"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc",
    content: "SmartPics transformed our SEO performance. Our images now rank in Google Image search, and our overall site traffic increased by 40%.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "WordPress Developer",
    company: "Freelance",
    content: "The AI-generated alt text is surprisingly accurate. Saves me hours of manual work on client sites. Game changer!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "E-commerce Owner",
    company: "StyleBox Co",
    content: "Product image optimization was a bottleneck. SmartPics handles thousands of images automatically. Highly recommend!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Loved by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            See what our customers have to say about SmartPics
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 relative"
            >
              <Quote className="w-8 h-8 text-purple-400/30 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white/80 mb-6">&ldquo;{testimonial.content}&rdquo;</p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-base text-white/60">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
