import type { JSX } from "react";

import { Pre } from "~/components/ui/typography";
import { cn } from "~/lib/utils";
import Copy from "./copy";

export default function PreformattedText({
  children,
  className,
  ...props
}: JSX.IntrinsicElements["pre"]) {
  const id = (Math.random() + 1).toString(36).substring(7);

  return (
    <Pre
      {...props}
      id={id}
      className={cn("group relative font-sans", className)}
    >
      <Copy id={id} />
      {children}
    </Pre>
  );
}
