import makeMetadata from "@/lib/makeMetadata";
import { TypographyH1, TypographyP } from "@/components/ui/Typography";

export const metadata = makeMetadata(
  "Blog",
  "A collection of blog posts that I've written."
);

export default function Page() {
  return (
    <>
      <TypographyH1>Blog</TypographyH1>
      <TypographyP>
        A collection of blog posts that I&apos;ve written.
      </TypographyP>
    </>
  );
}
