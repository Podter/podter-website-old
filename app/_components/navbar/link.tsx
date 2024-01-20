import type { PropsWithChildren } from "react";
import NextLink from "next/link";

import type { Page } from "~/constants/pages";
import { cn } from "~/lib/utils";

export interface LinkProps extends Omit<Page, "icon"> {
  path: string;
  className?: string;
}

export default function Link({
  path,
  name,
  className,
  children,
}: PropsWithChildren<LinkProps>) {
  return (
    <NextLink
      href={path}
      className={cn(
        "relative rounded-full px-2 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        className,
      )}
    >
      {name}
      {children}
    </NextLink>
  );
}
