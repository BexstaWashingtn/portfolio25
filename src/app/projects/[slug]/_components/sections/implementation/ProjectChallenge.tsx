import styles from "./projectChallenge.module.css";
import { ProjectChallengeData } from "../../../types/projectData";

type Props = {
  challenge: ProjectChallengeData;
};

export default function ProjectChallenge({ challenge }: Props) {
  return (
    <section className={styles.implementationChallenge}>
      <h3>Herausforderung</h3>

      <ul className={styles.implChellangeList}>
        <li className={styles.chellangeItem}>
          <div className={styles.chellangeListHeader}>
            <h4 className={styles.chellangeListHeadline}>
              1. Worin lag die Schwierigkeit?
            </h4>
          </div>

          <ul className={styles.itemList}>
            {challenge.problem.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </li>
        <li className={styles.chellangeItem}>
          <h4>2. Wie bist du vorgegangen?</h4>

          <ul className={styles.itemList}>
            {challenge.approach.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </li>
        <li className={styles.chellangeItem}>
          <h4>3. Was hast du daraus mitgenommen?</h4>

          <ul className={styles.itemList}>
            {challenge.learnings.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
}
