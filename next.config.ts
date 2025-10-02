import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/freelance-agency',
  images: {
    unoptimized: true,
  },
  // Optimize production build
  compress: true,
  // Enable React strict mode for better practices
  reactStrictMode: true,
};

export default nextConfig;
