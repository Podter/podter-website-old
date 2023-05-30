import styles from "./ShineCover.module.scss";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export default function ShineCover({
  children,
  className,
  shineBottom,
}: PropsWithChildren<{ className?: string; shineBottom?: boolean }>) {
  return (
    <div
      className={cn(
        "absolute -top-px -left-px w-full h-full z-10",
        styles.shine,
        shineBottom ? styles.shinebottom : styles.shinetop,
        className
      )}
      aria-hidden
    >
      {children}
    </div>
  );
}
