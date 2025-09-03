// SkillsSection.tsx
import SkillsEntries from "./SkillsEntries";
import type { Entry } from "@/types/skills";
import styles from "./skillsList.module.css";

export default function SkillsSection({
  title,
  entries = [],
}: {
  title?: string | null;
  entries?: Entry[];
}) {
  if (!entries || entries.length === 0) return null;

  const Wrapper: React.ElementType = title ? "section" : "div";

  return (
    <Wrapper className={styles.subSection}>
      {title && <h4>{title}</h4>}
      <ul className={styles.ItemList}>
        <SkillsEntries entries={entries} />
      </ul>
    </Wrapper>
  );
}
