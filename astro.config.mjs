import { defineConfig } from "astro/config";
import fs from "node:fs";

import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
  site: "https://podter.me",
  output: "hybrid",
  adapter: vercel({
    imageService: true,
  }),
  experimental: {
    assets: true,
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    robotsTxt(),
    mdx(),
  ],
  markdown: {
    gfm: true,
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "css-variables",
    },
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          test: ["h2", "h3"],
          properties: {
            "data-rehype-autolink-headings": true,
          },
        },
      ],
    ],
  },
  vite: {
    plugins: [rawFonts(['.ttf'])],
    optimizeDeps: { exclude: ['@resvg/resvg-js'] }
  }
});

function rawFonts(ext) {
  return {
    name: 'vite-plugin-raw-fonts',
    transform(_, id) {
      if (ext.some(e => id.endsWith(e))) {
        const buffer = fs.readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null
        };
      }
    }
  };
}
