import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // webpackDevMiddleware: (config) => {
    //   config.watchOptions = {
    //     poll: 1000,
    //   };
    //   return config;
    // },
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "book-thumbnail-bucket.s3.ap-northeast-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
