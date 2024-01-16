import type { MDXComponents } from "mdx/types";

import {
  A,
  Blockquote,
  Code,
  H1,
  H2,
  H3,
  H4,
  Ol,
  P,
  Ul,
} from "~/components/ui/typography";

export const mdxComponents: MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  blockquote: Blockquote,
  ul: Ul,
  ol: Ol,
  code: Code,
  a: A,
};
