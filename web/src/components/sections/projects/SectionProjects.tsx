import Inner from "../../utils/Inner";
import Stack from "../../utils/Stack";
import styles from "./sectionProjects.module.css";
import SectionHeader from "../SectionHeader";
import { BackgroundImageWrapper } from "../../layout/BackgroundImageWrapper";
import { BackgroundGradientWrapper } from "../../layout/BackgroundGradientWrapper";
import ProjectCardSlider from "./ProjectCardSlider";
import type { Project } from "./types";
import { getProjectPreviews } from "@/sanity/fetchProjects";
import { buildSrc } from "@sanity-image/url-builder";
import { getSanityData } from "@/sanity/getSanityData";
import { SanityProjectPreview } from "@/types/sanity/SanityProjectPreview ";

export default async function SectionProjects() {
  const projectsSanity: SanityProjectPreview[] = await getProjectPreviews();
  const { projectId, dataset } = getSanityData();

  const sliderItems: Project[] = projectsSanity.map(
    (project: SanityProjectPreview) => {
      const { src, width, height } = buildSrc({
        id: project.previewImage.asset._ref,
        width: 266,
        baseUrl: `https://cdn.sanity.io/images/${projectId}/${dataset}/`,
      });

      const image = {
        src,
        width,
        height,
        alt: project.title,
      };

      return {
        id: project._id,
        title: project.title,
        description: project.description,
        slug: project.slug,
        tags: project.methods?.slice(0, 5),
        image: image,
      };
    },
  );

  console.log("sliderItems: ", sliderItems);

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
