import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import { ImageIcon, FileText, Zap, Search, Globe, BarChart3, Sparkles, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Features - SmartPics.ai",
  description: "Discover how SmartPics.ai transforms your WordPress images with AI-powered optimization.",
};

const features = [
  {
    icon: FileText,
    title: "AI Alt Text Generation",
    description: "Automatically generate accurate, descriptive alt text for every image using advanced AI.",
  },
  {
    icon: ImageIcon,
    title: "Smart Format Conversion",
    description: "Convert images to modern formats like WebP and AVIF automatically.",
  },
  {
    icon: Search,
    title: "SEO Enhancement",
    description: "Improve search rankings with optimized images and better accessibility scores.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Generate alt text in 130+ languages to reach a global audience.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track optimization progress and see the impact on your site performance.",
  },
  {
    icon: Shield,
    title: "WCAG Compliance",
    description: "Meet accessibility standards and avoid legal compliance issues.",
  },
];

export default function FeaturesPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powerful <span className="gradient-text">Features</span>
            </h1>
            <p className="text-xl text-white/70">
              Everything you need to make your images AI-visible and SEO-optimized.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="glass rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
