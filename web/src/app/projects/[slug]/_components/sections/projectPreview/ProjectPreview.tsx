import ProjectCardSlider from "@/components/sections/projects/ProjectCardSlider";
import Inner from "@/components/utils/Inner";
import type { Project } from "@components/sections/projects/types";
import SectionHeader from "../../sectionHeader/SectionHeader";
import { BackgroundGradientWrapper } from "@/components/layout/BackgroundGradientWrapper";
import { getProjectsPreviewWithoutSlug } from "@/sanity/fetchProjects";
import { mapProjectPreviews } from "@/lib/mapers/projects/mapProjectPreviews";

type Props = {
  slug: string;
};

export default async function ProjectPreview({ slug }: Props) {
  const projectsWithoutSlug = await getProjectsPreviewWithoutSlug(slug);

  const filteredProjects: Project[] = mapProjectPreviews(projectsWithoutSlug);

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
