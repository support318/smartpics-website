"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Building2, Rocket } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Rocket,
    price: 29,
    description: "Perfect for small websites and blogs getting started with image optimization.",
    features: [
      "1,000 images/month",
      "WebP conversion",
      "Basic AI alt text",
      "Standard support",
      "Standard caching",
      "1 website",
    ],
    popular: false,
    color: "from-gray-600 to-gray-500",
  },
  {
    name: "Professional",
    icon: Zap,
    price: 79,
    description: "Best for growing businesses and agencies managing multiple client sites.",
    features: [
      "10,000 images/month",
      "WebP & AVIF conversion",
      "Advanced AI alt text",
      "Priority support",
      "Smart caching",
      "Schema markup",
      "Bulk processing",
      "5 websites",
    ],
    popular: true,
    color: "from-purple-600 to-blue-600",
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: 199,
    description: "For high-volume sites and agencies requiring maximum performance.",
    features: [
      "Unlimited images",
      "All formats + future ones",
      "Multi-provider AI",
      "24/7 dedicated support",
      "Advanced caching",
      "Custom integrations",
      "White-label option",
      "SLA guarantee",
      "Unlimited websites",
    ],
    popular: false,
    color: "from-amber-600 to-orange-600",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-purple-400 mb-6"
          >
            Pricing Plans
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm font-medium shadow-lg shadow-purple-500/25">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card */}
              <div 
                className={`relative h-full rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'glass-strong border-purple-500/30 shadow-2xl shadow-purple-500/10' 
                    : 'glass border-white/5'
                }`}
              >
                {/* Gradient Border for Popular */}
                {plan.popular && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/20 to-blue-500/20 -z-10 blur-sm" />
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <plan.icon className="w-7 h-7 text-white" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Billed annually or ${plan.price + 10}/month</div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-purple-500/20' : 'bg-gray-700'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-purple-400' : 'text-gray-400'}`} />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                      : 'glass hover:bg-white/10 text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass inline-flex flex-wrap justify-center gap-8 rounded-2xl px-8 py-6">
            {[
              { label: "14-day free trial", icon: "🎁" },
              { label: "No credit card required", icon: "💳" },
              { label: "Cancel anytime", icon: "✓" },
              { label: "24/7 Support", icon: "🎧" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-xl">{item.icon}</span>
                <span className="text-gray-400 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
