import styles from "./rating.module.css";

type Props = {
  rate: 1 | 2 | 3 | 4 | 5;
  max?: number; // optional, falls du später 10 Punkte willst
};

export default function Rating({ rate, max = 5 }: Props) {
  // zur Sicherheit clampen
  const value = Math.max(0, Math.min(rate, max));

  return (
    <div
      className={styles.rating}
      role='img'
      aria-label={`${value} von ${max} Punkten`}
      title={`${value} / ${max}`}
    >
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={`${i < value ? styles.bulletActive : ""} ${styles.bullet}`}
          aria-hidden
        />
      ))}
    </div>
  );
}
