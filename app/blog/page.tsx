import Link from "next/link";

import { getBlogPosts } from "~/lib/blog";
import { createMetadata } from "~/lib/create-metadata";

export const metadata = createMetadata({
  title: "Blog",
  description: "Blog page",
});

export default function Blogs() {
  const posts = getBlogPosts();

  return (
    <>
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <p>{post.slug}</p>
        </Link>
      ))}
    </>
  );
}
