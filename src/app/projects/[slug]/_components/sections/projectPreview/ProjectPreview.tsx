import ProjectCardSlider from "@/components/sections/projects/ProjectCardSlider";
import Inner from "@/components/utils/Inner";
import projectData from "@components/sections/projects/data.json";
import type { Project } from "@components/sections/projects/types";
import SectionHeader from "../../sectionHeader/SectionHeader";
import { BackgroundGradientWrapper } from "@/components/layout/BackgroundGradientWrapper";

type Props = {
  slug: string;
};

export default function ProjectPreview({ slug }: Props) {
  const projects: Project[] = projectData;
  const filteredProjects = projects.filter((project) => project.slug !== slug);

  return (
    <section>
      <BackgroundGradientWrapper
        gradient={{
          type: "linear",
          deg: "90deg",
          colorStops: [
            {
              color: "rgba(75, 47, 38, 0.8)",
              position: "0%",
            },
            {
              color: "rgba(255, 255, 255, 0.1)",
              position: "100%",
            },
          ],
        }}
      >
        <Inner variant='narrow' paddingTop='xl' paddingBottom='md'>
          <SectionHeader headline='weitere Projekte' />
        </Inner>
        <Inner variant='full' paddingTop='md' paddingBottom='md'>
          <ProjectCardSlider items={filteredProjects} />
        </Inner>
      </BackgroundGradientWrapper>
    </section>
  );
}
