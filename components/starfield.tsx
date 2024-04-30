"use client";

import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import { StarField as ReactStarField } from "starfield-react";

import { useWindowSize } from "~/hooks/use-window-size";

export default function StarField() {
  const { width, height } = useWindowSize();
  const { resolvedTheme: theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  const isDark = useMemo(() => theme === "dark", [theme]);

  return (
    <ReactStarField
      className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 -z-20 h-full w-full animate-fade-in select-none overflow-hidden"
      fps={60}
      speed={shouldReduceMotion ? 0 : 0.5}
      noBackground
      width={width}
      height={height}
      starStyle={isDark ? "#cdd6f4" : "#1e1e2e"}
      starSize={isDark ? 1.75 : 2.5}
    />
  );
}
