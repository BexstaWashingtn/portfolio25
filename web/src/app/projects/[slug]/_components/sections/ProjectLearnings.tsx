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
  const cleanedImprovements = cleanStringArray(learnings.improvements);
  const cleanedFeedback = cleanStringArray(learnings.feedback);

  return (
    <section className={styles.learnings}>
      <Inner variant='narrow' paddingBottom='md' paddingTop='xl'>
        <SectionHeader
          headline='Ergebnisse / Learnings'
          icon={{
            src: "/img/projects/icons/icon_learnings.svg",
            alt: "Projekt Ergebnisse / Learnings",
          }}
        />
      </Inner>
      <Inner variant='narrow' paddingBottom='xl' paddingTop='md'>
        {!!cleanedLearnings.length && (
          <>
            <h3>Was hast du gelernt?</h3>
            <ul className={styles.learningsList}>
              {cleanedLearnings.filter(Boolean).map((item, index) => (
                <li key={index} className={styles.learningsItem}>
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}

        {!!cleanedImprovements.length && (
          <>
            <h3>Was würdest du anders machen?</h3>
            <ul className={styles.learningsList}>
              {cleanedImprovements.filter(Boolean).map((item, index) => (
                <li key={index} className={styles.learningsItem}>
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}

        {!!cleanedFeedback.length && (
          <>
            <h3>Feedback vom Kunden (wenn vorhanden)</h3>
            <ul className={styles.learningsList}>
              {cleanedFeedback.filter(Boolean).map((item, index) => (
                <li key={index} className={styles.learningsItem}>
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}
      </Inner>
    </section>
  );
}
