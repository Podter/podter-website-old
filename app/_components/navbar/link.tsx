import { useMemo } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { m } from "framer-motion";

import type { Page } from "~/constants/pages";
import { cn } from "~/lib/utils";

interface LinkProps extends Page {
  path: string;
}

export default function Link({ path, name }: LinkProps) {
  const pathname = usePathname();
  const isActive = useMemo(() => path === pathname, [path, pathname]);

  return (
    <NextLink
      href={path}
      className={cn(
        "relative px-2 transition-colors hover:text-foreground",
        isActive ? "text-accent-foreground" : "text-muted-foreground",
      )}
    >
      {name}
      {isActive && (
        <m.div
          className="absolute inset-0 -z-10 rounded-full bg-accent"
          layoutId="sidebar"
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 30,
          }}
        />
      )}
    </NextLink>
  );
}
