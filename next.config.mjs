import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import bundleAnalyzer from "@next/bundle-analyzer";
import mdx from "@next/mdx";
import withPlugins from "next-compose-plugins";

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
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
  transpilePackages: ["next-mdx-remote"],
  rewrites() {
    return [
      {
        source: "/u/script.js",
        destination: "https://umami.podter.me/script.js",
      },
      {
        source: "/u/api/:path",
        destination: "https://umami.podter.me/api/:path",
      },
    ];
  },
};

/** @type {Parameters<typeof bundleAnalyzer>[0]} */
const bundleAnalyzerConfig = {
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
};

export default withPlugins(
  [mdx(), bundleAnalyzer(bundleAnalyzerConfig)],
  nextConfig,
);
