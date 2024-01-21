import type { z } from "zod";

import type { PostsSchema } from "~/components/cmdk/cmdk";
import { getBlogPosts } from "~/lib/blog";

export const dynamic = "force-static";

export async function GET() {
  const rawPosts = getBlogPosts();

  return Response.json({
    posts: rawPosts.map((post) => ({
      title: post.metadata.title,
      url: post.url,
    })),
  } as z.infer<typeof PostsSchema>);
}
