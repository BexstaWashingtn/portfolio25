import styles from "./projectChallenge.module.css";
import { ProjectChallengeData } from "../../../types/projectData";

type Props = {
  challenge: ProjectChallengeData;
};

export default function ProjectChallenge({ challenge }: Props) {
  return (
    <section className={styles.implementationChallenge}>
      <h3>Herausforderung</h3>

      <ul className={styles.implChallengeList}>
        {!!challenge?.problem?.length && (
          <li className={styles.challengeItem}>
            <div className={styles.challengeListHeader}>
              <h4 className={styles.challengeListHeadline}>
                Worin lag die Schwierigkeit?
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
        )}

        {!!challenge?.approach?.length && (
          <li className={styles.challengeItem}>
            <h4>Wie bist du vorgegangen?</h4>
            <ul className={styles.itemList}>
              {challenge.approach.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        )}

        {!!challenge?.learnings?.length && (
          <li className={styles.challengeItem}>
            <h4>Was hast du daraus mitgenommen?</h4>
            <ul className={styles.itemList}>
              {challenge.learnings.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        )}
      </ul>
    </section>
  );
}
