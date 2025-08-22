import Inner from "../utils/Inner";
import Stack from "../utils/Stack";
import ProjectsCardSlider from "../ProjectsCardSlider";
import styles from "./projects.module.css";

export default function SectionProjects() {
  return (
    <section className={styles.projects} id='projects'>
      <div className={styles.background}>
        <Inner variant='narrow' paddingTop='xxl'>
          <Stack gap='lg'>
            <header className={styles.projectsHeader}>
              <h2 className={styles.projectsHeadline}>Projekte</h2>
              <p className={styles.projectsText}>
                Lorem ipsum dolor sit amet consectetur. Aliquam porttitor vitae
                morbi faucibus venenatis in tristique. Dictumst pharetra
                adipiscing nibh at aliquet elementum risus dignissim. Nibh
                aliquam pharetra tristique sagittis. Lorem ipsum dolor sit amet
                consectetur. Aliquam porttitor vitae morbi faucibus venenatis in
                tristique.
              </p>
            </header>
          </Stack>
        </Inner>
        <main className={styles.projectsMain}>
          <Inner variant='swiper' paddingTop='lg' paddingBottom='xxl'>
            <Stack gap='sm' direction='row'>
              <ProjectsCardSlider />
            </Stack>
          </Inner>
        </main>
      </div>
    </section>
  );
}
