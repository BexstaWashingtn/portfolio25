import Inner from "../../utils/Inner";
import Stack from "../../utils/Stack";
import styles from "./sectionProjects.module.css";
import SectionHeader from "../SectionHeader";
import { BackgroundImageWrapper } from "../../layout/BackgroundImageWrapper";
import { BackgroundGradientWrapper } from "../../layout/BackgroundGradientWrapper";
import ProjectCardSlider from "./ProjectCardSlider";
import type { Project } from "./types";
import { getProjectsPreview } from "@/sanity/fetchProjects";
import { SanityProjectPreview } from "@/types/sanity/SanityProjectPreview";
import { notFound } from "next/navigation";
import { mapProjectPreviews } from "@/lib/mappers/projects/mapProjectPreviews";

export default async function SectionProjects() {
  const projectsSanity: SanityProjectPreview[] = await getProjectsPreview();

  if (!projectsSanity) {
    notFound();
  }

  const sliderItems: Project[] = mapProjectPreviews(projectsSanity);

  return (
    <section className={styles.projects} id='projects'>
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
            <Inner variant='narrow' paddingTop='xxl'>
              <SectionHeader
                headline={"Projekte"}
                text={
                  "Die Projekte entstanden im Rahmen meiner Weiterbildung 2024/25 oder eigenständig – mit Fokus auf UX, Barrierefreiheit und moderner Frontend-Entwicklung."
                }
                image={{
                  src: "img/projects/icon_projects.svg",
                  width: 160,
                  height: 140,
                  alt: "Projekt-Preview Icon",
                }}
              />
            </Inner>
            <Inner variant='full' paddingBottom='xxl'>
              <ProjectCardSlider items={sliderItems} />
            </Inner>
          </Stack>
        </BackgroundGradientWrapper>
      </BackgroundImageWrapper>
    </section>
  );
}
