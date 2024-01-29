import type { HTMLAttributes } from "react";
import { forwardRef } from "react";

import { cn } from "~/lib/utils";

const U = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      {...props}
      className={cn(
        "underline decoration-muted-foreground decoration-wavy underline-offset-1",
        className,
      )}
      ref={ref}
    />
  ),
);
U.displayName = "U";

export default U;
