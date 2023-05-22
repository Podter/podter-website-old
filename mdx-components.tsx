import type { MDXComponents } from "mdx/types";
import mdxComponents from "./lib/mdxComponents";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...mdxComponents,
  };
}
