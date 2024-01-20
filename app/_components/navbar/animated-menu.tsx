import { useCallback, useMemo } from "react";
import { usePathname } from "next/navigation";
import { LayoutGroup, LazyMotion, m } from "framer-motion";
import { useTheme } from "next-themes";

import type { LinkProps } from "./link";
import { pages } from "~/constants/pages";
import { cn } from "~/lib/utils";
import Link from "./link";

export default function AnimatedMenu() {
  const domMax = useCallback(
    () => import("~/lib/animation").then((mod) => mod.default),
    [],
  );

  return (
    <LazyMotion features={domMax}>
      <LayoutGroup>
        {Object.entries(pages).map(([path, { name }], i) => (
          <AnimatedLink key={i} path={path} name={name} />
        ))}
      </LayoutGroup>
    </LazyMotion>
  );
}

function AnimatedLink({ path, name }: LinkProps) {
  const pathname = usePathname();
  const { resolvedTheme: theme } = useTheme();

  const isActive = useMemo(
    () => path === (pathname.includes("/blog/") ? "/blog" : pathname),
    [path, pathname],
  );
  const isDark = useMemo(() => theme === "dark", [theme]);

  return (
    <Link
      name={name}
      path={path}
      className={cn(
        isActive ? "text-accent-foreground" : "text-muted-foreground",
      )}
    >
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
    </Link>
  );
}
