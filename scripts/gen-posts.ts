import fs from "node:fs";

import { getBlogPosts } from "~/lib/blog";

const posts = getBlogPosts();

const fileContent = `
interface Post {
  title: string;
  url: string;
}

export const posts: Post[] = [
  ${posts.map(
    (post) => `
    {
      title: "${post.metadata.title}",
      url: "${post.url}",
    },
  `,
  )}
];
`;

fs.writeFileSync("constants/posts.ts", fileContent.trim());
