import styles from "./rating.module.css";
import type { Rating } from "@/types/skills";

type Props = {
  rate: Rating;
  max?: number;
};

export default function Rating({ rate, max = 5 }: Props) {
  if (rate == null) return null;
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
        ></span>
      ))}
    </div>
  );
}
