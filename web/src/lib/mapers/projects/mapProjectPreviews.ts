import { Project } from "@/components/sections/projects/types";
import buildSanitySrc from "@/sanity/utils/buildSanitySrc";
import { SanityProjectPreview } from "@/types/sanity/SanityProjectPreview";

export function mapProjectPreviews(
  projects: SanityProjectPreview[],
): Project[] {
  return projects.flatMap((project) => {
    const imageRef = project.previewImage?.asset?._ref;

    if (!imageRef) {
      return [];
    }

    const previewImage = buildSanitySrc(project.previewImage, 260);

    if (!previewImage) {
      return [];
    }

    const { src, width, height } = previewImage;

    return [
      {
        id: project._id,
        title: project.title,
        description: project.description,
        slug: project.slug,
        tags: project.methods?.slice(0, 5),
        image: {
          src,
          width,
          height,
          alt: project.previewImage?.alt ?? project.title,
          title: project.previewImage?.title,
        },
      },
    ];
  });
}
