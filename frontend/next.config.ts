import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Change this to false
  compiler: {
    emotion: true,
  },
  poweredByHeader: false,
  images: {
    domains: ["lh3.googleusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },
  
};

export default nextConfig;
