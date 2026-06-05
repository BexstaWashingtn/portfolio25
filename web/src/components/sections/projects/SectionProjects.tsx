import Inner from "../../utils/Inner";
import Stack from "../../utils/Stack";
import styles from "./sectionProjects.module.css";
import SectionHeader from "../Header";
import { BackgroundImageWrapper } from "../../layout/BackgroundImageWrapper";
import { BackgroundGradientWrapper } from "../../layout/BackgroundGradientWrapper";
import ProjectCardSlider from "./ProjectCardSlider";
import type { Project } from "./types";
import { getProjectsPreview } from "@/sanity/fetchProjects";
import { SanityProjectPreview } from "@/types/sanity/SanityProjectPreview";
import { notFound } from "next/navigation";
import { mapProjectPreviews } from "@/lib/mappers/projects/mapProjectPreviews";
import { ProjectsSection } from "@/types/StartpageData";

type Props = {
  data: ProjectsSection;
};

export default async function SectionProjects({ data }: Props) {
  const projectsSanity: SanityProjectPreview[] = await getProjectsPreview();

  if (!projectsSanity) {
    notFound();
  }

  const sliderItems: Project[] = mapProjectPreviews(projectsSanity);

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
              <ProjectCardSlider items={sliderItems} />
            </Inner>
          </Stack>
        </BackgroundGradientWrapper>
      </BackgroundImageWrapper>
    </section>
  );
}
