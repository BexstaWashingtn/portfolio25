import Rating from "@/components/ui/rating/Rating";
import type { Entry } from "@/types/skills";
import styles from "./skillsItem.module.css";

export default function SkillsItem({ name, level }: Entry) {
  return (
    <li className={styles.item}>
      <span
        data-has-rating={level == null ? true : false}
        className={styles.name}
      >
        {name}
      </span>
      {level != null ? <Rating rate={level} /> : null}
    </li>
  );
}
