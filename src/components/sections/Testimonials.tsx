"use client";

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
    <section id="testimonials" className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Loved by <span className="text-blue-600">Thousands</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See what our customers have to say about SmartPics
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="card relative"
            >
              <Quote className="w-8 h-8 text-blue-200 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-slate-900">{testimonial.name}</div>
                <div className="text-sm text-slate-600">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
