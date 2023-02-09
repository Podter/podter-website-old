import Head from "next/head";
import Container from "@/components/Container";
import BlogPost from "@/components/BlogPost";
import { allPosts, Post } from "contentlayer/generated";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { compareDesc } from "date-fns";

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = async () => {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
};

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
          {posts.map((post, i) => (
            <BlogPost {...post} key={i} views={8233} />
          ))}
        </div>
      </Container>
    </>
  );
}
