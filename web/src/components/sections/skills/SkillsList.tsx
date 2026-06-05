import styles from "./skillsList.module.css";
import type { SkillCategory, SkillSubcategory } from "@/types/SkillCategories";
import SkillsSection from "./SkillsSection";

type Props = { data: SkillCategory[] };

export default function SkillsList({ data }: Props) {
  return (
    <ul className={styles.catList}>
      {data.map((category) => {
        return (
          <li key={category.title} className={styles.catListItem}>
            <h3>{category.title}</h3>

            {/* Root-Abschnitt der Kategorie */}
            <SkillsSection entries={category.entries} />

            {/* Subkategorien */}
            {category.subcategories?.map((sub: SkillSubcategory) => (
              <SkillsSection
                key={`${category.title}:${sub.title}`}
                title={sub.title}
                entries={sub.entries}
              />
            ))}
          </li>
        );
      })}
    </ul>
  );
}
