"use client";

import Link from "next/link";
import { Check, Rocket, Zap, Building2 } from "lucide-react";

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
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge mb-4">Pricing Plans</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Simple, <span className="text-blue-600">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card relative ${plan.popular ? 'border-blue-500 ring-1 ring-blue-500' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <plan.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="text-slate-600 text-sm mt-2">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
                <span className="text-slate-600">/month</span>
                <p className="text-sm text-slate-500 mt-1">
                  Billed annually or ${plan.price + 10}/month
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/pricing"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            14-day free trial
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            Cancel anytime
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            24/7 Support
          </div>
        </div>
      </div>
    </section>
  );
}
