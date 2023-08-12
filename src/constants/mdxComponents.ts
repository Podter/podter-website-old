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
} from "@/components/ui/typography";
import { Table, Tr, Th, Td } from "@/components/ui/table";

const mdxComponents = {
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
  // Table
  table: Table,
  tr: Tr,
  th: Th,
  td: Td,
} as const;

export default mdxComponents;
