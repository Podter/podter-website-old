import { cn } from "~/lib/utils";
import styles from "./spinner.module.scss";

interface SpinnerProps {
  size?: number;
  className?: string;
}

export default function Spinner({ size = 24, className }: SpinnerProps) {
  return (
    <div
      style={{
        // @ts-expect-error --spinner-size is a custom property
        "--spinner-size": `${size}px`,
      }}
      className={cn(styles.wrapper, className)}
    >
      <div className={styles.spinner}>
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
      </div>
    </div>
  );
}
