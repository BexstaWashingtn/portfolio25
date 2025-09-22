import Inner from "../utils/Inner";
import Stack from "../utils/Stack";
import ProjectsCardSlider from "../ProjectsCardSlider";
import styles from "./projects.module.css";
import SectionHeader from "./SectionHeader";
import { BackgroundImageWrapper } from "../layout/BackgroundImageWrapper";
import { BackgroundGradientWrapper } from "../layout/BackgroundGradientWrapper";

export default function SectionProjects() {
  return (
    <section className={styles.projects} id='projects'>
      {/* <div className={styles.background}> */}
      <BackgroundImageWrapper
        image={{
          src: "/img/projects/background.jpg",
          alt: "CoWorking Place Außenansicht bei Nacht",
          style: { opacity: 0.6 },
        }}
        blur={16}
      >
        <BackgroundGradientWrapper
          gradient={{
            type: "circle",
            startX: "50%",
            startY: "-25%",
            colorStops: [
              {
                color: "rgba(0, 20, 45, 0.8)",
                position: "0%",
              },

              {
                color: "rgba(0, 0, 0, 0.8)",
                position: "67%",
              },
            ],
          }}
        >
          <Inner variant='narrow' paddingTop='xxl'>
            <SectionHeader
              headline={"Projekte"}
              text={
                "Die Projekte entstanden im Rahmen meiner Weiterbildung 2024/25 oder eigenständig – mit Fokus auf UX, Barrierefreiheit und moderner Frontend-Entwicklung."
              }
            />
          </Inner>

          <Inner variant='swiper' paddingTop='lg' paddingBottom='xxl'>
            <Stack gap='sm' direction='row'>
              <ProjectsCardSlider />
            </Stack>
          </Inner>
        </BackgroundGradientWrapper>
      </BackgroundImageWrapper>
      {/* </div> */}
    </section>
  );
}
