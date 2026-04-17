import Inner from "@/components/utils/Inner";
import SectionHeader from "../sectionHeader/SectionHeader";
import styles from "./projectChallenge.module.css";

import { ProjectGoalsData } from "./../../types/projectData";

type Props = {
  goals: ProjectGoalsData;
};

export default function ProjectChallenge({ goals }: Props) {
  return (
    <section className={styles.projectChallenge}>
      <Inner paddingBottom='md' paddingTop='md' variant='narrow'>
        <SectionHeader
          headline='Herausforderung'
          icon={{
            src: "/img/projects/icons/icon_challenge.svg",
            alt: "Projekt Herrausforderungen",
          }}
        />

        <div className={styles.content}>
          <div className={styles.contentItem}>
            <h3 className={styles.subheadline}>Ausgangssituation</h3>
            <p>{goals.initial}</p>
          </div>

          <div className={styles.contentItem}>
            <h3 className={styles.subheadline}>Projektgrund</h3>
            <p>{goals.reason}</p>
          </div>
        </div>
      </Inner>
    </section>
  );
}
