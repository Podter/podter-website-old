const { withContentlayer } = require("next-contentlayer");
const withMDX = require("@next/mdx")();
const { withPlausibleProxy } = require("next-plausible");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
    serverActions: true,
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
        hostname: "lanyard.podter.me",
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

module.exports = withPlausibleProxy({
  customDomain: "https://plausible.podter.me",
})(withContentlayer(withMDX(nextConfig)));
