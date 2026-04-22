import styles from "./rating.module.css";
import type { Rating } from "@/types/skills";

type Props = {
  rate: Rating;
  max?: number;
};

export default function Rating({ rate, max = 5 }: Props) {
  if (rate == null) return null;
  const min = 1;
  const value = Math.max(min, Math.min(rate, max));

  return (
    <div
      className={styles.rating}
      role='meter'
      aria-valuenow={rate}
      aria-valuemin={min}
      aria-valuemax={max}
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
