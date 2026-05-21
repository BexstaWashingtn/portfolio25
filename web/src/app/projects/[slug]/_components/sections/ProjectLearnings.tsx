import Inner from "@/components/utils/Inner";
import SectionHeader from "../sectionHeader/SectionHeader";
import styles from "./projectLearnings.module.css";
import { ProjectLearningsData } from "./../../types/projectData";
import { cleanStringArray } from "@/lib/utils/data/cleanStringArray";

type Props = {
  learnings: ProjectLearningsData;
};

export default function ProjectLearnings({ learnings }: Props) {
  const cleanedLearnings = cleanStringArray(learnings.learnings);
  const cleanedImprovements = learnings?.improvements?.trim();
  const cleanedFeedback = learnings?.feedback?.trim();

  return (
    <section className={styles.learnings}>
      <Inner variant='narrow' paddingBottom='md'>
        <SectionHeader
          headline='Ergebnisse / Learnings'
          icon={{
            src: "/img/projects/icons/icon_learnings.svg",
            alt: "Projekt Ergebnisse / Learnings",
          }}
        />
      </Inner>
      <Inner variant='narrow' paddingBottom='xxl' paddingTop='md'>
        {!!cleanedLearnings.length && (
          <>
            <h3>Erkenntnisse & Fortschritte</h3>
            <ul className={styles.learningsList}>
              {cleanedLearnings.filter(Boolean).map((item, index) => (
                <li key={index} className={styles.learningsItem}>
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}

        {cleanedImprovements && (
          <>
            <h3>zukünftige Verbesserungen</h3>
            <div className={styles.learningsList}>{cleanedImprovements}</div>
          </>
        )}

        {cleanedFeedback && (
          <>
            <h3>Feedback vom Kunden</h3>
            <div className={styles.learningsList}>{cleanedFeedback}</div>
          </>
        )}
      </Inner>
    </section>
  );
}
