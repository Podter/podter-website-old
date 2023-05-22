import makeMetadata from "@/lib/makeMetadata";

export const metadata = makeMetadata(
  "Blog",
  "A collection of blog posts that I've written."
);

export default function Page() {
  return <div>blog</div>;
}
