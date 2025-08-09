/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com"],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
};

module.exports = nextConfig;
