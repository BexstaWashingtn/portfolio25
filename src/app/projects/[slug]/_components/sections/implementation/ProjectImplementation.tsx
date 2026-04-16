import styles from "./projectImplemenation.module.css";
import Inner from "@/components/utils/Inner";
import SectionHeader from "../../sectionHeader/SectionHeader";
import Timeline from "./projectTimeline/timeline";
import TechStack from "./techStack";
import Chellange from "./chellange";

export default function ProjectImplementation() {
  return (
    <section className={styles.projectImplementation}>
      <Inner paddingTop='xl' variant='full'>
        <Inner variant='narrow'>
          <SectionHeader
            icon={{
              src: "/img/projects/icons/icon_implementation.svg",
              alt: "Projekt Umsetzung",
            }}
            headline='Umsetzung'
          />

          <Timeline />
        </Inner>
      </Inner>
      <TechStack />
      <Inner paddingBottom='xl' variant='full'>
        <Inner variant='narrow' paddingTop='md' paddingBottom='md'>
          <Chellange />
        </Inner>
      </Inner>
    </section>
  );
}
