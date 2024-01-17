import type { JSX } from "react";

import { cn } from "~/lib/utils";

export default function PreformattedText({
  className,
  ...props
}: JSX.IntrinsicElements["pre"]) {
  return (
    <pre
      {...props}
      className={cn("mt-6 overflow-x-auto rounded-lg border", className)}
    />
  );
}
