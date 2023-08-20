import styles from "./spinner.module.scss";
import { cn } from "@/lib/utils";

type Props = {
  size?: number;
  className?: string;
};

export default function Spinner({ size = 24, className }: Props) {
  return (
    <div
      style={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        "--spinner-size": `${size}px`,
      }}
      className={cn(styles.wrapper, className)}
    >
      <div className={styles.spinner}>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        {[...Array(12)].map((_, i) => (
          <div className={styles.bar} key={i} />
        ))}
      </div>
    </div>
  );
}
