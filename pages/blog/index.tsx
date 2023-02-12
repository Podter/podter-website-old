import Head from "next/head";
import Container from "@/components/Container";
import BlogPost from "@/components/BlogPost";
import { allPosts, Post } from "contentlayer/generated";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { compareDesc } from "date-fns";
import { useEffect, useState } from "react";
import axios from "axios";

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
  const [viewsData, setViewsData] = useState<BlogViewsData[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/blog");
      setViewsData(res.data.data);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Blog | Podter</title>
        <meta
          name="description"
          content="A collection of blog posts that I've written."
        />
        <meta property="og:title" content="Blog" />
        <meta
          property="og:description"
          content="A collection of blog posts that I've written."
        />
        <meta
          property="og:image:url"
          content="https://podter.xyz/api/og?title=Blog"
        />
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
          {posts.map((post, i) => {
            const views = viewsData?.find(
              (data) => data.slug === post._raw.flattenedPath
            )?.views;

            return (
              <BlogPost
                {...post}
                key={i}
                views={views || "0"}
                loading={loading}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
}
