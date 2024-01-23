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

export const WakaTimeLanguageSchema = z.object({
  name: z.string(),
  text: z.string(),
  percent: z.number(),
});

export const WakaTimeSchema = z.object({
  languages: z.array(WakaTimeLanguageSchema),
});
export type WakaTime = z.infer<typeof WakaTimeSchema>;
