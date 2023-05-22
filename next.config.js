/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lanyard.podter.xyz",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.rbxcdn.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
