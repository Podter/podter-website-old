import * as React from "react";

import { cn } from "~/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-full bg-secondary", className)}
      {...props}
    />
  );
}

export { Skeleton };
