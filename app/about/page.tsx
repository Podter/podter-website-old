import { createMetadata } from "~/lib/create-metadata";
// @ts-expect-error no types for mdx
import Content from "./about.mdx";

export const runtime = "edge";

export const metadata = createMetadata({
  title: "About",
  description: "Get to know me a little better.",
});

export default function About() {
  return <Content />;
}
