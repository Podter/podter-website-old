import { createMetadata } from "~/lib/create-metadata";
import BlogContent from "./blog.mdx";

export const metadata = createMetadata({
  title: "Blog",
  description: "Blog page",
});

export default function Blog() {
  return <BlogContent />;
}
