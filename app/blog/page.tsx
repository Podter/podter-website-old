import Link from "next/link";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns/format";

import { H1, P } from "~/components/ui/typography";
import { getBlogPosts } from "~/lib/blog";
import { createMetadata } from "~/lib/create-metadata";

export const dynamic = "force-static";

export const metadata = createMetadata({
  title: "Blog",
  description: "A collection of blog posts I've written.",
});

export default function Blogs() {
  const posts = getBlogPosts();

  return (
    <>
      <div className="flex flex-col">
        <H1>Blog</H1>
        <P className="mt-3">A collection of blog posts I&apos;ve written.</P>
      </div>
      {posts.map((post) => (
        <div
          key={post.slug}
          className="mt-10 flex flex-col gap-3 [&:nth-child(3)]:mt-6"
        >
          <Link
            href={post.url}
            className="font-medium leading-7 underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-foreground/50 focus-visible:decoration-foreground/50 focus-visible:outline-none"
          >
            {post.metadata.title}
          </Link>
          <P className="mt-0">{post.metadata.description}</P>
          <div className="flex items-center gap-1 text-muted-foreground">
            <CalendarIcon className="h-3.5 w-3.5" width={14} height={14} />
            <p className="text-sm leading-7">
              {format(post.date, "do MMMM, yyyy")}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
