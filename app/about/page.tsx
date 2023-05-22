import About from "./about.mdx";
import makeMetadata from "@/lib/makeMetadata";

export const metadata = makeMetadata(
  "About",
  "Hey, I'm Podter. I'm a student and self-taught developer from Thailand."
);

export default function Page() {
  return <About />;
}
