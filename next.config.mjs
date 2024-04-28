import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import bundleAnalyzer from "@next/bundle-analyzer";
import mdx from "@next/mdx";
import million from "million/compiler";
import withPlugins from "next-compose-plugins";
import { withPlausibleProxy } from "next-plausible";

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
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
};

/** @type {Parameters<typeof million.next>[1]} */
const millionConfig = {
  auto: { rsc: true },
};

/** @type {Parameters<typeof withPlausibleProxy>[0]} */
const plausibleConfig = {
  customDomain: "https://plausible.podter.me",
  subdirectory: "stats",
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
    withPlausibleProxy(plausibleConfig),
    bundleAnalyzer(bundleAnalyzerConfig),
  ],
  nextConfig,
);
