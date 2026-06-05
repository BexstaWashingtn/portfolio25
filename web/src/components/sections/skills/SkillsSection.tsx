// SkillsSection.tsx
import SkillsEntries from "./SkillsEntries";
import type { SkillEntry } from "@/types/SkillCategories";
import styles from "./skillsList.module.css";

export default function SkillsSection({
  title,
  entries = [],
}: {
  title?: string | null;
  entries?: SkillEntry[];
}) {
  if (!entries || entries.length === 0) return null;

  const hasTitle = Boolean(title);
  const Wrapper = hasTitle ? "section" : "div";

  return (
    <Wrapper className={styles.subSection}>
      {title && <h4 className={styles.h4}>{title}</h4>}
      <ul className={styles.ItemList}>
        <SkillsEntries entries={entries} />
      </ul>
    </Wrapper>
  );
}
