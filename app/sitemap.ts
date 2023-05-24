import { allBlogs } from "contentlayer/generated";
import pages from "@/constants/pages";
import { siteConfig } from "@/constants/site";

export default function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  const routes = Object.keys(pages).map((route) => ({
    url: siteConfig.url + route,
    lastModified: new Date(),
  }));

  return [...routes, ...blogs];
}
