import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import pwsh from "highlight.js/lib/languages/powershell";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
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
