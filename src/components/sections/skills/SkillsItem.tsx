import Rating from "@/components/ui/rating/Rating";
import type { Entry } from "@/types/skills";
import styles from "./skillsItem.module.css";

export default function SkillsItem({ name, level }: Entry) {
  return (
    <li data-has-rating={level != null ? true : false} className={styles.item}>
      <span className={styles.name}>{name}</span>
      {level != null ? (
        <div className={styles.ratingWrapper}>
          <Rating rate={level} />
        </div>
      ) : null}
    </li>
  );
}
