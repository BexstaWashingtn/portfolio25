import ProjectChallenge from "./_components/sections/ProjectChallenge";
import ProjectHeader from "./_components/sections/ProjectHeader";
import ProjectImplementation from "./_components/sections/implementation/ProjectImplementation";
import ProjectVisuals from "./_components/sections/visuals/ProjectVisuals";
import ProjectLearnings from "./_components/sections/ProjectLearnings";
import ProjectPreview from "./_components/sections/projectPreview/ProjectPreview";
import ViewedTracker from "./_components/ViewedTracker";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/sanity/fetchProjects";
import buildSanitySrc from "@/sanity/utils/buildSanitySrc";
import { Image } from "@/types/image";
import { ProjectData } from "./types/projectData";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectView({ params }: Props) {
  const { slug } = await params;
  if (!slug) {
    notFound();
  }

  const sanityProjectData = await getProjectBySlug(slug);
  if (!sanityProjectData) {
    notFound();
  }

  console.log("sanityProjectData", sanityProjectData);

  const mainColorRGB = `${sanityProjectData.projectMainColor.r},${sanityProjectData.projectMainColor.g},${sanityProjectData.projectMainColor.b}`;

  const { src, width, height } = buildSanitySrc(
    sanityProjectData.projectImage.asset._ref,
    816,
  );

  const projectImage: Image = {
    src,
    width,
    height,
    alt: sanityProjectData.title,
  };

  const projectData: ProjectData = {
    details: {
      title: sanityProjectData.title,
      subtitle: sanityProjectData.subtitle,
      mainColorRGB,
      projectInformations: sanityProjectData.projectInformations,
      projectImage,
    },
  };

  console.log("projectData", projectData);

  if (
    !projectData?.details?.title?.trim() ||
    !projectData?.details?.projectImage?.src?.trim()
  ) {
    notFound();
  }

  return (
    <>
      <header>
        <ProjectHeader details={projectData.details} />
      </header>

      <main>
        {projectData.goals && <ProjectChallenge goals={projectData.goals} />}
        {projectData.implementation && (
          <ProjectImplementation implementation={projectData.implementation} />
        )}
        {!!projectData?.visuals?.length && (
          <ProjectVisuals visuals={projectData.visuals} />
        )}
        {!!projectData.learnings && (
          <ProjectLearnings learnings={projectData.learnings} />
        )}

        <ProjectPreview slug={slug} />
      </main>
      {/* Speichert das gesehene Projekt im LocalStorage*/}
      {slug && <ViewedTracker slug={slug} />}
    </>
  );
}
