import styles from "./skillsList.module.css";
import type { Category, Subcategory } from "@/types/skills";
import SkillsEntries from "./SkillsEntries";

// The full dataset
type Props = { datas: Category[] };

export default function SkillsList({ datas }: Props) {
  return (
    <ul className={styles.catsList}>
      {datas.map((category) => {
        const hasSubcategory = !!category.subcategory;

        return hasSubcategory ? (
          <li key={category.name} className={styles.catListItem}>
            <h3>{category.name}</h3>

            {category.subcategory?.map((subcategory: Subcategory) => {
              return (
                <ul
                  key={`${category.name}:${subcategory.name}`}
                  className={styles.ItemList}
                >
                  <SkillsEntries entries={category.entries} />

                  <li className={styles.ItemListItem}>
                    <h4>{subcategory.name}</h4>
                  </li>

                  <SkillsEntries entries={subcategory.entries} />
                </ul>
              );
            })}
          </li>
        ) : (
          <li key={category.name} className={styles.catListItem}>
            <h3>{category.name}</h3>
            <ul key={category.name} className={styles.ItemList}>
              <SkillsEntries entries={category.entries} />
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
