import Inner from "@/components/utils/Inner";
import SectionHeader from "../sectionHeader/SectionHeader";
import styles from "./projectLearnings.module.css";

export default function ProjectLearnings() {
  return (
    <section className={styles.learnings}>
      <Inner variant='narrow' paddingBottom='xl' paddingTop='xl'>
        <SectionHeader
          headline='Ergebnisse / Learnings'
          icon={{
            src: "/img/projects/icons/icon_learnings.svg",
            alt: "Projekt Ergebnisse / Learnings",
          }}
        />

        <p>Was hast du gelernt?</p>
        <p>Was würdest du anders machen?</p>
        <p>Feedack vom Kunden (wenn vorhanden)</p>
      </Inner>
    </section>
  );
}
