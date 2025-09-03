import Rating from "@/components/ui/rating/Rating";
import type { Entry } from "@/types/skills";
import styles from "./skillsItem.module.css";

export default function SkillsItem({ name, level }: Entry) {
  const listSince = "• ";

  return (
    <li className={styles.item}>
      <span>
        {!level && listSince}
        {name}
      </span>
      {level && <Rating rate={level} />}
    </li>
  );
}
