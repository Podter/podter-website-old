// TODO: make config look better

import createMDX from "@next/mdx";
import million from "million/compiler";

import "./env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    webpackBuildWorker: true,
    mdxRs: true,
  },
};

const withMDX = createMDX();

const millionConfig = {
  auto: { rsc: true },
};

export default million.next(withMDX(nextConfig), millionConfig);
