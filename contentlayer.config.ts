import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import mdxImage from "./lib/mdxImage";
import rehypeHighlight from "rehype-highlight";
import pwsh from "highlight.js/lib/languages/powershell";
import path from "path";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        mdxImage,
        {
          publicDir: path.join(process.cwd(), "public", "posts"),
          resourcePath: "/posts",
        },
      ],
      [
        rehypeHighlight,
        {
          languages: {
            pwsh,
          },
        },
      ],
    ],
  },
});
