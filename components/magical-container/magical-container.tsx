"use client";

import type { MouseEventHandler, PropsWithChildren } from "react";
import { useCallback, useRef, useState } from "react";

import { cn } from "~/lib/utils";
import styles from "./magical-container.module.scss";

interface MagicalContainerProps {
  className?: string;
  containerClassName?: string;
}

// TODO: change other stuff to this magical thing too
export default function MagicalContainer({
  children,
  className,
  containerClassName,
}: PropsWithChildren<MagicalContainerProps>) {
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
        // @ts-expect-error --mouse-x and --mouse-y are custom CSS properties
        "--mouse-x": `${x}px`,
        "--mouse-y": `${y}px`,
      }}
      className={cn(styles.container, containerClassName)}
      onMouseMove={mouseMove}
      ref={ref}
    >
      <div className={cn(styles.content, className)}>{children}</div>
      <div className={styles.background} />
    </div>
  );
}
