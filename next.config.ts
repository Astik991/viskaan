import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for static deployment
  images: {
    unoptimized: true, // Required for static export
  },
  // Optional: if you're using CSS modules or global CSS
  experimental: {
    appDir: true,
  },
};

export default nextConfig;