"use client";

import type { MouseEventHandler, PropsWithChildren } from "react";
import { useCallback, useRef, useState } from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "~/lib/utils";
import styles from "./magical-container.module.scss";

interface MagicalContainerProps {
  className?: string;
  containerClassName?: string;
  color?: string;
  hoverOpacity?: number;
  asChild?: boolean;
}

export default function MagicalContainer({
  children,
  className,
  containerClassName,
  color,
  hoverOpacity,
  asChild,
}: PropsWithChildren<MagicalContainerProps>) {
  const Comp = asChild ? Slot : "div";

  const [{ x, y }, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const mouseMove = useCallback<MouseEventHandler<HTMLDivElement>>((e) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  }, []);

  return (
    <div
      style={{
        // @ts-expect-error these are custom CSS properties
        "--mouse-x": `${x}px`,
        "--mouse-y": `${y}px`,
        "--color": color ?? "hsl(var(--foreground))",
        "--hover-opacity":
          hoverOpacity ?? "var(--magical-container-hover-opacity)",
      }}
      className={cn(styles.container, containerClassName)}
      onMouseMove={mouseMove}
      ref={ref}
    >
      <Comp className={cn(styles.content, className)}>{children}</Comp>
      <div className={styles.background} />
    </div>
  );
}
