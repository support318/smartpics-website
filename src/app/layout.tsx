import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const calistoga = Calistoga({
  weight: "400",
  variable: "--font-calistoga",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartPics.ai - AI-Powered Image Optimization for WordPress",
  description: "Generate alt text, convert to WebP/AVIF, and boost SEO automatically with SmartPics.ai. The ultimate AI-powered WordPress image optimization plugin.",
  keywords: ["WordPress", "image optimization", "AI", "alt text", "WebP", "AVIF", "SEO", "plugin"],
  openGraph: {
    title: "SmartPics.ai - AI-Powered Image Optimization",
    description: "Transform your WordPress images with AI. Auto-generate alt text, convert formats, boost SEO.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <body
        className={`${inter.variable} ${calistoga.variable} antialiased overflow-x-hidden w-full`}
        style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #1a103c 50%, #0f172a 100%)' }}
      >
        {children}
      </body>
    </html>
  );
}
