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
import { mapSanityImage } from "@/lib/mappers/project/mapSanityImage";
import { mapSanityVisuals } from "@/lib/mappers/project/mapSanityVisuals";

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

  if (!sanityProjectData?.title?.trim()) {
    notFound();
  }

  const mainColorRGB = await getProjectMainColorRGB(
    sanityProjectData.projectMainColor,
  );

  if (!sanityProjectData.projectImage.asset?._ref?.trim()) {
    notFound();
  }

  const projectImage = mapSanityImage({
    image: sanityProjectData.projectImage,
    width: 816,
    alt: sanityProjectData.projectImage.alt,
    title: sanityProjectData?.title,
    _type: sanityProjectData.projectImage._type,
  });

  if (!projectImage) {
    notFound();
  }

  const backgroundImage = mapSanityImage({
    image: sanityProjectData.backgroundImage,
    width: 1920,
    height: 1080,
    alt:
      sanityProjectData.backgroundImage?.alt ||
      `${sanityProjectData.title} background image`,
    title: sanityProjectData.title,
    _type: sanityProjectData.backgroundImage?._type || "image",
  });

  const projectData: ProjectData = {
    details: {
      title: sanityProjectData.title,
      subtitle: sanityProjectData.subtitle,
      mainColorRGB,
      projectInformations: sanityProjectData.projectInformations,
      projectImage,
      ...(backgroundImage && { backgroundImage }),
    },
    goals: sanityProjectData.goals,
    implementation: sanityProjectData.implementation,
    visuals: mapSanityVisuals(sanityProjectData.visuals ?? []),
  };

  console.log("projectData", projectData);

  return (
    <>
      <main>
        <ProjectHeader details={projectData.details} />

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
