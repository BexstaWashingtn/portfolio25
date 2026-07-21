import { mapSanityImage } from "@/lib/mappers/sanity/mapSanityImage";
import { SanityProjectQueryResult } from "@/types/sanity/SanityProjectData";
import {
  ProjectData,
  ProjectImplementationData,
  ProjectTechstackData,
} from "@/types/projects/ProjectData";
import { mapSanityVisuals } from "./mapSanityVisuals";

const TECHSTACK_CATEGORIES = ["frontend", "backend", "tools"] as const;

export function mapProjectData(
  project: SanityProjectQueryResult,
  mainColorRGB: string,
): ProjectData | null {
  const projectImage = mapSanityImage({
    image: project.projectImage,
    width: 816,
    alt: project.projectImage.alt || project.title,
    title: project.title,
    _type: project.projectImage._type,
  });

  if (!projectImage) return null;

  const backgroundImage = project.backgroundImage
    ? mapSanityImage({
        image: project.backgroundImage,
        width: 1920,
        height: 1080,
        alt: project.backgroundImage.alt || `${project.title} background image`,
        title: project.title,
        _type: project.backgroundImage._type,
      })
    : null;

  return {
    details: {
      title: project.title,
      subtitle: project.subtitle,
      mainColorRGB,
      projectInformations: project.projectInformations,
      projectImage,
      ...(backgroundImage && { backgroundImage }),
    },
    ...(project.goals && { goals: project.goals }),
    ...(project.implementation && {
      implementation: mapImplementation(project.implementation),
    }),
    visuals: mapSanityVisuals(project.visuals ?? []),
    ...(project.learnings && {
      learnings: {
        learnings: project.learnings.learnings ?? [],
        improvements: project.learnings.improvements ?? "",
        feedback: project.learnings.feedback ?? "",
      },
    }),
  };
}

function mapImplementation(
  implementation: NonNullable<SanityProjectQueryResult["implementation"]>,
): ProjectImplementationData {
  return {
    process: implementation.process ?? [],
    techstack: mapTechstack(implementation.techstack),
    challenge: {
      problem: implementation.challenge?.problem ?? "",
      approach: implementation.challenge?.approach ?? "",
      learnings: implementation.challenge?.learnings ?? "",
    },
  };
}

function mapTechstack(
  techstack: NonNullable<
    SanityProjectQueryResult["implementation"]
  >["techstack"],
): ProjectTechstackData[] {
  if (!techstack) return [];

  return TECHSTACK_CATEGORIES.flatMap((category) => {
    const items = techstack[category] ?? [];
    if (!items.length) return [];

    return [
      {
        title: category.charAt(0).toUpperCase() + category.slice(1),
        icon: category,
        items,
      },
    ];
  });
}
