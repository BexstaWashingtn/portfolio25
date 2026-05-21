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
        {!!challenge?.problem && (
          <li className={styles.challengeItem}>
            <div className={styles.challengeListHeader}>
              <h4 className={styles.challengeListHeadline}>Schwierigkeiten</h4>
            </div>
            <ul className={styles.itemList}>
              <li className={styles.listItem}>{challenge.problem}</li>
            </ul>
          </li>
        )}

        {!!challenge?.approach && (
          <li className={styles.challengeItem}>
            <h4>Vorgehensweise</h4>
            <ul className={styles.itemList}>
              <li className={styles.listItem}>{challenge.approach}</li>
            </ul>
          </li>
        )}

        {!!challenge?.learnings && (
          <li className={styles.challengeItem}>
            <h4>Erfahrungen</h4>
            <ul className={styles.itemList}>
              <li className={styles.listItem}>{challenge.learnings}</li>
            </ul>
          </li>
        )}
      </ul>
    </section>
  );
}
