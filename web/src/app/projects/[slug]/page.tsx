import ProjectChallenge from "./_components/sections/ProjectChallenge";
import ProjectHeader from "./_components/sections/ProjectHeader";
import ProjectImplementation from "./_components/sections/implementation/ProjectImplementation";
import ProjectVisuals from "./_components/sections/projectVisuals/ProjectVisuals";
import ProjectLearnings from "./_components/sections/ProjectLearnings";
import ProjectPreview from "./_components/sections/projectPreview/ProjectPreview";
import ViewedTracker from "./_components/ViewedTracker";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getProjectsPreviewWithoutSlug,
} from "@/sanity/fetchProjects";
import { getProjectMainColorRGB } from "@/lib/project/getProjectMainColorRGB";
import { mapSanityImage } from "@/lib/mappers/sanity/mapSanityImage";
import { mapProjectData } from "@/lib/mappers/projects/mapProjectData";
import { getProfileFullName } from "@/lib/profile/getFullName";
import type { Metadata } from "next";
import { cache } from "react";
import { getPortfolioMainColor } from "@/sanity/fetchPortfolio";
import { mapProjectPreviews } from "@/lib/mappers/projects/mapProjectPreviews";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const getCachedProjectBySlug = cache(getProjectBySlug);
const fullName = getProfileFullName();

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = slug ? await getCachedProjectBySlug(slug) : null;

  if (!project?.title?.trim()) {
    return {
      title: `Projekt nicht gefunden | ${fullName}`,
      description: "Das angeforderte Projekt wurde nicht gefunden.",
    };
  }

  const title = `${project.title.trim()} | ${fullName}`;
  const description =
    project.subtitle?.trim() ||
    `Projekt ${project.title.trim()} aus dem Portfolio von ${fullName}.`;
  const previewImage = project.projectImage?.asset?._ref?.trim()
    ? mapSanityImage({
        image: project.projectImage,
        width: 1200,
        alt: project.projectImage.alt || project.title,
        title: project.title,
        _type: project.projectImage._type,
      })
    : null;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      ...(previewImage && {
        images: [
          {
            url: previewImage.src,
            width: previewImage.width,
            alt: previewImage.alt,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(previewImage && { images: [previewImage.src] }),
    },
  };
}

export default async function ProjectView({ params }: Props) {
  const { slug } = await params;
  if (!slug) {
    notFound();
  }

  const [sanityProjectData, sanityProjectPreviews] = await Promise.all([
    getCachedProjectBySlug(slug),
    getProjectsPreviewWithoutSlug(slug),
  ]);
  if (!sanityProjectData) {
    notFound();
  }

  if (!sanityProjectData?.title?.trim()) {
    notFound();
  }

  const mainColor =
    sanityProjectData.projectMainColor ?? (await getPortfolioMainColor());
  const mainColorRGB = getProjectMainColorRGB(mainColor);
  const projectPreviews = mapProjectPreviews(sanityProjectPreviews);

  const projectData = mapProjectData(sanityProjectData, mainColorRGB);

  if (!projectData) notFound();

  return (
    <>
      <main id='main' tabIndex={-1}>
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

        <ProjectPreview projects={projectPreviews} />
      </main>
      {/* Speichert das gesehene Projekt im LocalStorage*/}
      {slug && <ViewedTracker slug={slug} />}
    </>
  );
}
