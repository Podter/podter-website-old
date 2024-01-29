import { url } from "~/constants/metadata";
import { pages } from "~/constants/pages";
import { getBlogPosts } from "~/lib/blog";

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${url}${post.url}`,
    lastModified: post.metadata.date,
  }));

  const routes = Object.keys(pages).map((route) => ({
    url: `${url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
