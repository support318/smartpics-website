import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

const posts = {
  "why-alt-text-matters-for-ai": {
    title: "Why Alt Text Matters in the Age of AI",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "AI & SEO",
    content: `
      <p>As AI assistants like ChatGPT, Claude, and Perplexity become the primary way people discover and interact with web content, the importance of alt text has never been greater.</p>
      
      <h2>The AI Revolution in Search</h2>
      <p>Traditional search engines relied heavily on text content to understand web pages. But today's AI assistants can read and understand context in ways that go beyond simple keyword matching. However, there's one critical limitation: AI cannot "see" images.</p>
      
      <h2>How AI Reads Images</h2>
      <p>When an AI assistant encounters an image on your website, it relies entirely on the alt text to understand what's in that image. Without descriptive alt text, your images are essentially invisible to AI systems.</p>
      
      <h2>SEO Implications</h2>
      <p>This has profound implications for SEO. As AI-powered search becomes more prevalent, websites with properly described images will have a significant advantage. Your visual content becomes part of your searchable, indexable content.</p>
      
      <h2>The SmartPics Solution</h2>
      <p>SmartPics uses advanced AI to automatically generate accurate, descriptive alt text for all your images. This ensures your visual content is fully accessible to both AI assistants and users with screen readers.</p>
    `,
  },
  "webp-vs-avif-which-format": {
    title: "WebP vs AVIF: Which Image Format Should You Use?",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Optimization",
    content: `
      <p>Modern web development offers multiple image formats, each with its own advantages. Let's compare WebP and AVIF to help you choose the right format for your WordPress site.</p>
      
      <h2>WebP: The Reliable Choice</h2>
      <p>Developed by Google, WebP offers 25-35% better compression than JPEG while maintaining quality. It has excellent browser support (95%+ of users) and is perfect for most websites.</p>
      
      <h2>AVIF: The New Standard</h2>
      <p>AVIF is the next generation format, offering 50% better compression than JPEG. However, browser support is still growing (around 85% of users).</p>
      
      <h2>Our Recommendation</h2>
      <p>SmartPics automatically serves AVIF to supported browsers and falls back to WebP for others. You get the best of both worlds without any complexity.</p>
    `,
  },
  "wordpress-image-optimization-guide": {
    title: "The Complete WordPress Image Optimization Guide",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "WordPress",
    content: `
      <p>Images are often the largest assets on a web page. Optimizing them properly can dramatically improve your site's performance and user experience.</p>
      
      <h2>1. Choose the Right Format</h2>
      <p>Use modern formats like WebP or AVIF instead of JPEG/PNG. These can reduce file sizes by 30-50% without quality loss.</p>
      
      <h2>2. Proper Sizing</h2>
      <p>Don't upload 4000px wide images for a 800px display area. Resize images to match their display dimensions.</p>
      
      <h2>3. Compression</h2>
      <p>Use smart compression that maintains visual quality while reducing file size. SmartPics handles this automatically.</p>
      
      <h2>4. Alt Text for SEO</h2>
      <p>Every image should have descriptive alt text. This helps SEO and makes your site accessible to screen readers.</p>
      
      <h2>5. Lazy Loading</h2>
      <p>Only load images when they're about to enter the viewport. This dramatically improves initial page load times.</p>
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts[params.slug as keyof typeof posts];
  if (!post) return { title: "Post Not Found" };
  
  return {
    title: `${post.title} - SmartPics.ai Blog`,
    description: post.content.replace(/<[^>]*>/g, "").substring(0, 160),
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];
  
  if (!post) {
    notFound();
  }

  return (
    <PageLayout>
      <article className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="mb-8">
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-white/60 mb-12">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
          
          <div
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </PageLayout>
  );
}
