import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef, useMemo } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "~/lib/utils";

interface LinkProps extends ComponentPropsWithoutRef<typeof NextLink> {
  name: string;
}

export const indicatorClassNames =
  "absolute inset-0 -z-10 rounded-full bg-accent";

export const Link = forwardRef<ElementRef<typeof NextLink>, LinkProps>(
  ({ name, href, children, className, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = useMemo(
      () => href === (pathname.includes("/blog/") ? "/blog" : pathname),
      [href, pathname],
    );

    return (
      <NextLink
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
      </NextLink>
    );
  },
);
Link.displayName = "Link";
