import { useMemo } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { m } from "framer-motion";
import { useTheme } from "next-themes";

import type { Page } from "~/constants/pages";
import { cn } from "~/lib/utils";

interface LinkProps extends Omit<Page, "icon"> {
  path: string;
}

export default function Link({ path, name }: LinkProps) {
  const pathname = usePathname();
  const { resolvedTheme: theme } = useTheme();

  const isActive = useMemo(
    () => path === (pathname.includes("/blog/") ? "/blog" : pathname),
    [path, pathname],
  );
  const isDark = useMemo(() => theme === "dark", [theme]);

  return (
    <NextLink
      href={path}
      className={cn(
        "relative rounded-full px-2 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
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
          initial={{ opacity: isDark ? 1 : 0.5 }}
          animate={{ opacity: isDark ? 1 : 0.5 }}
        />
      )}
    </NextLink>
  );
}
