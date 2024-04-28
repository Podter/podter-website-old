import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import bundleAnalyzer from "@next/bundle-analyzer";
import mdx from "@next/mdx";
import withPlugins from "next-compose-plugins";
import { withPlausibleProxy } from "next-plausible";

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    webpackBuildWorker: true,
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.steamgriddb.com",
        pathname: "/grid/**",
      },
    ],
  },
  transpilePackages: ["next-mdx-remote"],
};

/** @type {Parameters<typeof withPlausibleProxy>[0]} */
const plausibleConfig = {
  customDomain: "https://plausible.podter.me",
  subdirectory: "p",
};

/** @type {Parameters<typeof bundleAnalyzer>[0]} */
const bundleAnalyzerConfig = {
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
};

export default withPlugins(
  [
    mdx(),
    withPlausibleProxy(plausibleConfig),
    bundleAnalyzer(bundleAnalyzerConfig),
  ],
  nextConfig,
);
