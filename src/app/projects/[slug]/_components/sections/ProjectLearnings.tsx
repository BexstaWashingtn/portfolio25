import Inner from "@/components/utils/Inner";
import SectionHeader from "../sectionHeader/SectionHeader";
import styles from "./projectLearnings.module.css";
import { ProjectLearningsData } from "./../../types/projectData";

type Props = {
  learnings: ProjectLearningsData;
};

export default function ProjectLearnings({ learnings }: Props) {
  /* TODO: ITEM VIEW OPTIMIEREN - DRZEIT NUR RUDIMENTÄR */

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
        <h3>Was hast du gelernt?</h3>
        <ul className={styles.learningsList}>
          {learnings.learnings.map((item, index) => (
            <li key={index} className={styles.learningsItem}>
              {item}
            </li>
          ))}
        </ul>

        <h3>Was würdest du anders machen?</h3>
        <ul className={styles.learningsList}>
          {learnings.improvements.map((item, index) => (
            <li key={index} className={styles.learningsItem}>
              {item}
            </li>
          ))}
        </ul>

        <h3>Feedack vom Kunden (wenn vorhanden)</h3>
        <ul className={styles.learningsList}>
          {learnings.feedback.map((item, index) => (
            <li key={index} className={styles.learningsItem}>
              {item}
            </li>
          ))}
        </ul>
      </Inner>
    </section>
  );
}
