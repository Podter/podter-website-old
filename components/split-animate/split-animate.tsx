import type { FC, JSX } from "react";
import { useMemo } from "react";

import { cn } from "~/lib/utils";
import styles from "./split-animate.module.scss";

interface SplitAnimateProps {
  children: string;
  className?: string;
  as:
    | Extract<keyof JSX.IntrinsicElements, "p" | "span" | "h1" | "h2" | "h3">
    | FC;
}

export default function SplitAnimate({
  children,
  className,
  as: Comp,
}: SplitAnimateProps) {
  const textArray = useMemo(() => {
    if (children === "") return [];
    return children.trim().split(" ");
  }, [children]);

  return (
    <Comp className={className}>
      {textArray.map((text, i) => {
        const isLast = i + 1 === textArray.length;
        return (
          <span className="inline-flex overflow-hidden" key={i}>
            <span
              className={cn(
                "inline-block whitespace-pre",
                styles.split_animate,
              )}
              style={{ animationDelay: `${0.075 * (i + 1)}s` }}
            >
              {isLast ? text : text + " "}
            </span>
          </span>
        );
      })}
    </Comp>
  );
}
