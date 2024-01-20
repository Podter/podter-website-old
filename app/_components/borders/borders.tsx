import { cn } from "~/lib/utils";
import styles from "./borders.module.scss";

export function BordersHorizontal() {
  return (
    <div className="pointer-events-none -z-10 select-none">
      <div
        className={cn(
          "absolute left-0 top-6 h-px md:top-20",
          styles.line_horizontal,
        )}
      />
      <div
        className={cn(
          "absolute left-0 top-16 h-px md:top-[7.5rem]",
          styles.line_horizontal,
          styles.animate_delay,
        )}
      />
    </div>
  );
}

export function BordersVertical() {
  return (
    <div className="pointer-events-none absolute left-0 right-0 top-0 -z-10 h-full min-h-screen w-full select-none">
      <div className={cn("absolute left-4 top-0 w-px", styles.line_vertical)} />
      <div
        className={cn(
          "absolute right-4 top-0 w-px",
          styles.line_vertical,
          styles.animate_delay,
        )}
      />
    </div>
  );
}
