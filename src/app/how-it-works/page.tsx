import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import { Upload, Cpu, CheckCircle, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works - SmartPics.ai",
  description: "Learn how SmartPics.ai automatically optimizes your WordPress images in 4 simple steps.",
};

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Install & Connect",
    description: "Install the SmartPics WordPress plugin and connect your site with one click. No coding required.",
  },
  {
    icon: Cpu,
    number: "02",
    title: "AI Analysis",
    description: "Our AI scans every image on your site, analyzing content, context, and visual elements.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Auto-Optimization",
    description: "Generate alt text, convert formats, and compress images automatically in the background.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Watch Results",
    description: "Track improvements in your dashboard. See SEO scores rise and page speed increase.",
  },
];

export default function HowItWorksPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How It <span className="gradient-text">Works</span>
            </h1>
            <p className="text-xl text-white/70">
              Get started in minutes. Four simple steps to AI-optimized images.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1 glass rounded-2xl p-8">
                  <div className="text-sm font-bold text-purple-400 mb-2">Step {step.number}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/70 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}