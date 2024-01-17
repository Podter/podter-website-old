import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns/format";
import { parseISO } from "date-fns/parseISO";
import pwsh from "highlight.js/lib/languages/powershell";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { H1 } from "~/components/ui/typography";
import { getBlogPosts } from "~/lib/blog";
import { createMetadata } from "~/lib/create-metadata";
import { mdxComponents } from "~/lib/mdx";

import "./blog.scss";

export const dynamic = "force-static";

interface PageParams {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: PageParams): Metadata | undefined {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const date = format(parseISO(post.metadata.date), "d MMMM yyyy");

  return createMetadata({
    title: post.metadata.title,
    description: post.metadata.description,
    publishedTime: date,
  });
}

export default async function Blog({ params }: PageParams) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return notFound();
  }

  // TODO: make code block, table, checkbox, image works
  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            // @ts-expect-error types are wrong
            rehypeHighlight,
            {
              languages: { pwsh },
            },
          ],
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
              test: ["h2", "h3"],
              properties: {
                "data-rehype-autolink-headings": true,
              },
            },
          ],
        ],
        format: "mdx",
      },
    },
  });

  const date = format(parseISO(post.metadata.date), "do MMMM, yyyy");

  return (
    <>
      <H1>{post.metadata.title}</H1>
      <div className="mt-3 flex items-center gap-1">
        <CalendarIcon className="h-3.5 w-3.5" width={14} height={14} />
        <p className="text-sm leading-7 text-muted-foreground">
          Published on {date}
        </p>
      </div>
      <article className="mt-6">{content}</article>
    </>
  );
}
