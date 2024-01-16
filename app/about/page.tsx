import { createMetadata } from "~/lib/create-metadata";
import About from "./about.mdx";

export const metadata = createMetadata({
  title: "About",
  description: "About page",
});

export default function AboutPage() {
  return <About />;
}
