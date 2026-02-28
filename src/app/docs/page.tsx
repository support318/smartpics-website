import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { Book, Code, HelpCircle, Zap, FileText, Video } from "lucide-react";
import Link from "next/link";

const docCategories = [
  {
    icon: Book,
    title: "Getting Started",
    description: "Installation, setup, and first steps with SmartPics",
    links: [
      { name: "Quick Start Guide", href: "#" },
      { name: "Installation", href: "#" },
      { name: "Configuration", href: "#" },
      { name: "First Steps", href: "#" },
    ],
  },
  {
    icon: Zap,
    title: "Features",
    description: "Learn about all SmartPics capabilities",
    links: [
      { name: "AI Alt Text Generation", href: "#" },
      { name: "Vector Embeddings", href: "#" },
      { name: "Focus Keywords", href: "#" },
      { name: "Format Conversion", href: "#" },
    ],
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Integrate SmartPics into your applications",
    links: [
      { name: "Authentication", href: "#" },
      { name: "Endpoints", href: "#" },
      { name: "Rate Limits", href: "#" },
      { name: "Webhooks", href: "#" },
    ],
  },
  {
    icon: HelpCircle,
    title: "Troubleshooting",
    description: "Common issues and solutions",
    links: [
      { name: "Error Messages", href: "#" },
      { name: "Performance", href: "#" },
      { name: "Compatibility", href: "#" },
      { name: "FAQ", href: "#" },
    ],
  },
];

export default function DocsPage() {
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
              Documentation
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How can we <span className="gradient-text">help?</span>
            </h1>
            <p className="text-xl text-white/70">
              Everything you need to know about SmartPics.ai
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white">
                Search
              </button>
            </div>
          </div>

          {/* Doc Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {docCategories.map((category) => (
              <div key={category.title} className="glass rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                    <p className="text-white/60 text-sm">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {category.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-purple-400 transition-colors flex items-center gap-2"
                      >
                        <span>→</span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6 text-center">
              <Video className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Video Tutorials</h4>
              <p className="text-white/60 text-sm mb-4">Step-by-step video guides</p>
              <Link href="#" className="text-purple-400 hover:text-purple-300 text-sm">
                Watch now →
              </Link>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <FileText className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Changelog</h4>
              <p className="text-white/60 text-sm mb-4">Latest updates and releases</p>
              <Link href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                View updates →
              </Link>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <HelpCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Support</h4>
              <p className="text-white/60 text-sm mb-4">Get help from our team</p>
              <Link href="/contact" className="text-green-400 hover:text-green-300 text-sm">
                Contact us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
