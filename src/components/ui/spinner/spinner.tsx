import styles from "./spinner.module.scss";

type Props = {
  size?: number;
};

export default function Spinner({ size = 24 }: Props) {
  return (
    <div
      style={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        "--spinner-size": `${size}px`,
      }}
      className={styles.wrapper}
    >
      <div className={styles.spinner}>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        {[...Array(12)].map(() => (
          <div className={styles.bar} />
        ))}
      </div>
    </div>
  );
}
