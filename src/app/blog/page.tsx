import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - SmartPics.ai",
  description: "Tips, guides, and insights on AI image optimization, SEO, and web accessibility.",
};

const posts = [
  {
    slug: "why-alt-text-matters-for-ai",
    title: "Why Alt Text Matters in the Age of AI",
    excerpt: "Discover how AI assistants like ChatGPT and Claude read your images through alt text, and why it's crucial for modern SEO.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "AI & SEO",
  },
  {
    slug: "webp-vs-avif-which-format",
    title: "WebP vs AVIF: Which Image Format Should You Use?",
    excerpt: "A comprehensive comparison of modern image formats. Learn which one offers better compression and quality for your WordPress site.",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Optimization",
  },
  {
    slug: "wordpress-image-optimization-guide",
    title: "The Complete WordPress Image Optimization Guide",
    excerpt: "Everything you need to know about optimizing images in WordPress, from compression to lazy loading best practices.",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "WordPress",
  },
];

export default function BlogPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              SmartPics <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-white/70">
              Tips, guides, and insights on AI image optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="glass rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-white/70 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
