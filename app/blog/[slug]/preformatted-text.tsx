"use client";

import { cn } from "@/lib/utils";

export default function PreformattedText({
  className,
  ...props
}: JSX.IntrinsicElements["pre"]) {
  return (
    <pre
      {...props}
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border py-4 bg-background shadow-sm",
        className
      )}
    />
  );
}
