import Head from "next/head";
import Container from "@/components/Container";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

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
        <Link href="/blog" className="grid md:grid-cols-2 gap-4">
          <BlogCard />
        </Link>
      </Container>
    </>
  );
}
