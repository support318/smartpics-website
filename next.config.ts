import type { NextConfig } from "next";

// Deployment trigger: v2 - Force fresh build
const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
