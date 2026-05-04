import styles from "./projectChallenge.module.css";
import { ProjectChallengeData } from "../../../types/projectData";

type Props = {
  challenge: ProjectChallengeData;
};

export default function ProjectChallenge({ challenge }: Props) {
  console.log("challenge", challenge);

  return (
    <section className={styles.implementationChallenge}>
      <h3>Herausforderung</h3>

      <ul className={styles.implChallengeList}>
        {!!challenge?.problem && (
          <li className={styles.challengeItem}>
            <div className={styles.challengeListHeader}>
              <h4 className={styles.challengeListHeadline}>
                Worin lag die Schwierigkeit?
              </h4>
            </div>
            <ul className={styles.itemList}>
              <li className={styles.listItem}>{challenge.problem}</li>
            </ul>
          </li>
        )}

        {!!challenge?.approach && (
          <li className={styles.challengeItem}>
            <h4>Wie bist du vorgegangen?</h4>
            <ul className={styles.itemList}>
              <li className={styles.listItem}>{challenge.approach}</li>
            </ul>
          </li>
        )}

        {!!challenge?.learnings && (
          <li className={styles.challengeItem}>
            <h4>Was hast du daraus mitgenommen?</h4>
            <ul className={styles.itemList}>
              <li className={styles.listItem}>{challenge.learnings}</li>
            </ul>
          </li>
        )}
      </ul>
    </section>
  );
}
