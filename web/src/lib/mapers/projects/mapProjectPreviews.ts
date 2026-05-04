import { Project } from "@/components/sections/projects/types";
import buildSanitySrc from "@/sanity/utils/buildSanitySrc";
import { SanityProjectPreview } from "@/types/sanity/SanityProjectPreview";

export function mapProjectPreviews(
  projects: SanityProjectPreview[]
): Project[] {
  return projects
    .filter((project) => !!project.previewImage?.asset?._ref)
    .map((project: SanityProjectPreview) => {
      const { src, width, height } = buildSanitySrc(
        project.previewImage.asset._ref,
        260
      );

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
        image,
      };
    });
}
