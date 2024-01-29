import { z } from "zod";

export const PostsSchema = z.object({
  posts: z.array(
    z.object({
      title: z.string(),
      url: z.string(),
    }),
  ),
});
export type Posts = z.infer<typeof PostsSchema>;
