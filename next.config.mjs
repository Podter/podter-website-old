// TODO: make config look better, add million.js

import createMDX from "@next/mdx";

import "./env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    ppr: true,
    webpackBuildWorker: true,
    mdxRs: true,
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
