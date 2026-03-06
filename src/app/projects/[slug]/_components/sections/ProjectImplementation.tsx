import styles from "./projectImplemenation.module.css";
import Inner from "@/components/utils/Inner";
import SectionHeader from "../sectionHeader/SectionHeader";
import ProjectTimeline from "../projectTimeline/ProjectTimeline";

export default function ProjectImplementation() {
  return (
    <section className={styles.projectImplementation}>
      <Inner paddingBottom='md' paddingTop='md' variant='narrow'>
        <SectionHeader
          icon={{
            src: "/img/projects/icons/icon_implementation.svg",
            alt: "Projekt Umsetzung",
          }}
          headline='Umsetzung'
        />

        <ProjectTimeline />
      </Inner>
    </section>
  );
}
