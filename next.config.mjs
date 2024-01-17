import mdx from "@next/mdx";
import million from "million/compiler";
import withPlugins from "next-compose-plugins";

import "./env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    webpackBuildWorker: true,
    mdxRs: true,
  },
};

/** @type {Parameters<typeof million.next>[1]} */
const millionConfig = {
  auto: { rsc: true },
};

export default withPlugins(
  [() => million.next(nextConfig, millionConfig), mdx()],
  nextConfig,
);
