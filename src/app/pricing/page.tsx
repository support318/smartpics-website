import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing - SmartPics.ai",
  description: "Choose the perfect plan for your WordPress site. Start free, upgrade as you grow.",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out SmartPics",
    features: [
      "50 images/month",
      "Basic alt text generation",
      "WebP conversion",
      "Email support",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Best for growing websites",
    features: [
      "1,000 images/month",
      "Advanced AI alt text",
      "WebP & AVIF conversion",
      "Priority support",
      "Analytics dashboard",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Business",
    price: "$49",
    period: "/month",
    description: "For agencies and large sites",
    features: [
      "Unlimited images",
      "Multi-language support",
      "White-label reports",
      "API access",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-white/70">
              Start free and scale as your site grows. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-2 border-purple-500"
                    : "glass"
                }`}
              >
                {plan.popular && (
                  <div className="inline-block px-4 py-1 rounded-full bg-purple-600 text-white text-sm font-medium mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-white/70 ml-1">{plan.period}</span>}
                </div>
                <p className="text-white/70 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-medium transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
