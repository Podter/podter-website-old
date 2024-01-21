import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "~/lib/utils";

interface BaseLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  name: string;
}

export const indicatorClassNames =
  "absolute inset-0 -z-10 rounded-full bg-accent";

export const BaseLink = forwardRef<ElementRef<typeof Link>, BaseLinkProps>(
  ({ name, href, children, className, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = useMemo(
      () => href === (pathname.includes("/blog/") ? "/blog" : pathname),
      [href, pathname],
    );

    return (
      <Link
        {...props}
        href={href}
        className={cn(
          "relative rounded-full px-2 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          isActive ? "text-accent-foreground" : "text-muted-foreground",
          className,
        )}
        ref={ref}
      >
        {name}
        {isActive && children}
      </Link>
    );
  },
);
BaseLink.displayName = "BaseLink";
