import Inner from "../../utils/Inner";
import Stack from "../../utils/Stack";
import styles from "./sectionProjects.module.css";
import SectionHeader from "../Header";
import { BackgroundImageWrapper } from "../../layout/BackgroundImageWrapper";
import { BackgroundGradientWrapper } from "../../layout/BackgroundGradientWrapper";
import ProjectCardSlider from "./ProjectCardSlider";
import type { ProjectPreviewData } from "@/types/projects/ProjectData";
import { ProjectsSection } from "@/types/StartpageData";

type Props = {
  data: ProjectsSection;
  projects: ProjectPreviewData[];
};

export default function SectionProjects({ data, projects }: Props) {
  return (
    <section className={styles.projects} id={data.settings.id}>
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
            type: "radial",
            shape: "circle",
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
          <Stack>
            {data.header && (
              <Inner variant='narrow' paddingTop='xxl'>
                <SectionHeader
                  headline={data.header.headline}
                  text={data.header.text}
                  image={data.header.image ?? undefined}
                />
              </Inner>
            )}
            <Inner variant='full' paddingBottom='xxl'>
              <ProjectCardSlider items={projects} />
            </Inner>
          </Stack>
        </BackgroundGradientWrapper>
      </BackgroundImageWrapper>
    </section>
  );
}
