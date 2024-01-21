import { createMetadata } from "~/lib/create-metadata";
import AboutContent from "./about.mdx";

export const dynamic = "force-static";

export const metadata = createMetadata({
  title: "About",
  description:
    "Hey, I'm Podter. I'm a student and self-taught developer from Thailand.",
});

export default function About() {
  return <AboutContent />;
}
