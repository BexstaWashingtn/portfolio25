import ProjectChallenge from "./_components/sections/ProjectChallenge";
import ProjectHeader from "./_components/sections/ProjectHeader";
import ProjectImplementation from "./_components/sections/implementation/ProjectImplementation";
import ProjectVisuals from "./_components/sections/visuals/ProjectVisuals";
import ProjectLearnings from "./_components/sections/ProjectLearnings";
import ProjectPreview from "./_components/sections/projectPreview/ProjectPreview";
import ViewedTracker from "./_components/ViewedTracker";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/sanity/fetchProjects";
import { ProjectData } from "./types/projectData";
import { getProjectMainColorRGB } from "@/lib/project/getProjectMainColorRGB";
import { mapSanityImage } from "@/lib/mapers/porject/mapProjectImage";

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

  const mainColorRGB = await getProjectMainColorRGB(
    sanityProjectData.projectMainColor,
  );

  const projectImage = mapSanityImage({
    image: sanityProjectData.projectImage,
    width: 816,
    alt: sanityProjectData.projectImage.alt,
    title: sanityProjectData.title,
  });

  const backgroundImage = mapSanityImage({
    image: sanityProjectData.backgroundImage,
    width: 1920,
    height: 1280,
    alt: sanityProjectData.title,
    title: sanityProjectData.title,
  });

  const projectData: ProjectData = {
    details: {
      title: sanityProjectData.title,
      subtitle: sanityProjectData.subtitle,
      mainColorRGB,
      projectInformations: sanityProjectData.projectInformations,
      projectImage,
      backgroundImage,
    },
    goals: sanityProjectData.goals,
    implementation: sanityProjectData.implementation,
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
          <ProjectImplementation
            implementation={projectData.implementation}
            mainColorRGB={mainColorRGB}
          />
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
