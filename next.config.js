/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "replicate.com",
      "replicate.delivery",
      "user-images.githubusercontent.com",
    ],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
