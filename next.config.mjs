import bundleAnalyzer from "@next/bundle-analyzer";
import mdx from "@next/mdx";
import million from "million/compiler";
import withPlugins from "next-compose-plugins";

import "./env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  reactStrictMode: true,
  experimental: {
    webpackBuildWorker: true,
    mdxRs: true,
    // ppr: true,
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
};

/** @type {Parameters<typeof million.next>[1]} */
const millionConfig = {
  auto: { rsc: true },
};

/** @type {Parameters<typeof bundleAnalyzer>[0]} */
const bundleAnalyzerConfig = {
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
};

export default withPlugins(
  [
    () => million.next(nextConfig, millionConfig),
    mdx(),
    bundleAnalyzer(bundleAnalyzerConfig),
  ],
  nextConfig,
);
