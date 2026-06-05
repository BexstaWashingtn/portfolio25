import Rating from "@/components/ui/rating/Rating";
import type { SkillEntry } from "@/types/SkillCategories";
import styles from "./skillsItem.module.css";

export default function SkillsItem({ skill, level }: SkillEntry) {
  return (
    <li data-has-rating={level != null ? true : false} className={styles.item}>
      <span className={styles.name}>{skill}</span>
      {level != null ? (
        <div className={styles.ratingWrapper}>
          <Rating rate={level} />
        </div>
      ) : null}
    </li>
  );
}
