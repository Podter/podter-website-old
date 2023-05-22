import type { MDXComponents } from "mdx/types";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyList,
  TypographyOrderedList,
  TypographyInlineCode,
  TypographySmall,
  TypographyAnchor,
  TypographyPre,
} from "@/components/ui/Typography";
import { Table, Tr, Th, Td } from "@/components/ui/Table";

const mdxComponents: MDXComponents = {
  // Typography
  h1: TypographyH1,
  h2: TypographyH2,
  h3: TypographyH3,
  h4: TypographyH4,
  p: TypographyP,
  blockquote: TypographyBlockquote,
  ul: TypographyList,
  ol: TypographyOrderedList,
  code: TypographyInlineCode,
  small: TypographySmall,
  a: TypographyAnchor,
  pre: TypographyPre,
  // Table
  table: Table,
  tr: Tr,
  th: Th,
  td: Td,
};

export default mdxComponents;
