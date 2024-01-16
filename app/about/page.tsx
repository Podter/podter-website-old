import { createMetadata } from "~/lib/create-metadata";
import AboutContent from "./about.mdx";

export const metadata = createMetadata({
  title: "About",
  description: "About page",
});

export default function About() {
  return <AboutContent />;
}
