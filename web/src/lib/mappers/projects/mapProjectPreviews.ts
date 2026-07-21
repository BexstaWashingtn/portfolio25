import buildSanitySrc from "@/sanity/utils/buildSanitySrc";
import { SanityProjectPreview } from "@/types/sanity/SanityProjectPreview";
import { ProjectPreviewData } from "@/types/projects/ProjectData";

export function mapProjectPreviews(
  projects: SanityProjectPreview[],
): ProjectPreviewData[] {
  return projects.flatMap((project) => {
    const imageRef = project.previewImage?.asset?._ref;

    if (!imageRef) return [];

    const previewImage = buildSanitySrc(project.previewImage, 260);
    if (!previewImage) return [];

    const { src, width, height } = previewImage;

    return [
      {
        id: project._id,
        title: project.title,
        description: project.description,
        slug: project.slug,
        tags: project.techStack?.slice(0, 5) ?? [],
        image: {
          src,
          width,
          height,
          alt: project.previewImage.alt ?? project.title,
          title: project.previewImage.title,
        },
      },
    ];
  });
}
