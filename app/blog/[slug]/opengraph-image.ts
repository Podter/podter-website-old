import { format } from "date-fns/format";

import type { PageParams } from "./page";
import { getBlogPosts } from "~/lib/blog";
import { createOpenGraph } from "~/lib/create-opengraph";

export const dynamic = "force-static";

export function generateImageMetadata({ params }: PageParams) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) return null;

  const date = format(post.date, "d MMMM yyyy");

  return [
    {
      id: post.slug,
      alt: `${post.metadata.title} - ${date}`,
    },
  ];
}

export default async function BlogOpenGraphImage({ params }: PageParams) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) return null;

  const date = format(post.date, "d MMMM yyyy");
  const render = createOpenGraph(post.metadata.title, date);

  return await render();
}
