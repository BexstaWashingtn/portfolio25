import styles from "./projectProcess.module.css";
import { ProjectProcessData } from "../../../types/projectData";

type Props = {
  process: ProjectProcessData[];
};

export default function ProjectProcess({ process }: Props) {
  return (
    <section className={styles.projectTimeline}>
      <h3>Ablauf</h3>

      <ul className={styles.timelineContent}>
        {process.map(({ title, description }, index) => {
          return (
            <li key={index} className={styles.timelineItem}>
              {title && <h4 className={styles.headline}>{title}</h4>}
              {description && (
                <p className={styles.description}>{description}</p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
