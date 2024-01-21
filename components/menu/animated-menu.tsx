import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef, useCallback, useMemo } from "react";
import { LayoutGroup, LazyMotion, m } from "framer-motion";
import { useTheme } from "next-themes";

import { pages } from "~/constants/pages";
import { indicatorClassNames, Link } from "./link";

export default function AnimatedMenu() {
  const domMax = useCallback(
    () => import("~/lib/animation").then((mod) => mod.default),
    [],
  );

  return (
    <LazyMotion features={domMax}>
      <LayoutGroup>
        {Object.entries(pages).map(([path, { name }], i) => (
          <Link key={i} name={name} href={path}>
            <Indicator />
          </Link>
        ))}
      </LayoutGroup>
    </LazyMotion>
  );
}

const Indicator = forwardRef<
  ElementRef<typeof m.div>,
  ComponentPropsWithoutRef<typeof m.div>
>(({ ...props }, ref) => {
  const { resolvedTheme: theme } = useTheme();
  const isDark = useMemo(() => theme === "dark", [theme]);

  return (
    <m.div
      {...props}
      className={indicatorClassNames}
      layoutId="sidebar"
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 30,
      }}
      initial={{ opacity: isDark ? 1 : 0.5 }}
      animate={{ opacity: isDark ? 1 : 0.5 }}
      ref={ref}
    />
  );
});
Indicator.displayName = "Indicator";
