import styles from "./skillsList.module.css";
import type { Category, Subcategory } from "@/types/skills";
import SkillsSection from "./SkillSection";

type Props = { datas: Category[] };

export default function SkillsList({ datas }: Props) {
  return (
    <ul className={styles.catsList}>
      {datas.map((category) => {
        return (
          <li key={category.name} className={styles.catListItem}>
            <h3>{category.name}</h3>

            {/* Root-Abschnitt der Kategorie */}
            <SkillsSection entries={category.entries} />

            {/* Subkategorien */}
            {category.subcategory?.map((sub: Subcategory) => (
              <SkillsSection
                key={`${category.name}:${sub.name}`}
                title={sub.name}
                entries={sub.entries}
              />
            ))}
          </li>
        );
      })}
    </ul>
  );
}
