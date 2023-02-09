import Head from "next/head";
import Container from "@/components/Container";
import BlogPost from "@/components/BlogPost";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Podter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <h1 className="text-5xl font-bold">
          <span className="bg-gradient-to-r from-ctp-red to-ctp-blue bg-clip-text text-transparent">
            Blog
          </span>
        </h1>
        <p className="pt-6">
          A collection of blog posts that I&apos;ve written.
        </p>
        <div className="divider" />
        <div className="grid grid-cols-1 gap-4">
          <BlogPost
            href="/blog"
            title="How to make a chat app"
            posted="2022-01-12"
            views={1203}
          />
          <BlogPost
            href="/blog"
            title="Hello, world!"
            posted="2022-02-09"
            views={2374}
          />
        </div>
      </Container>
    </>
  );
}
