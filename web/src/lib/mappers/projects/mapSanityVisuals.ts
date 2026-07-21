import { isDefined } from "@/lib/utils/data/isDefined";
import { safeString } from "@/lib/utils/data/safeString";
import { mapSanityImage } from "@/lib/mappers/sanity/mapSanityImage";
import type { SanityVisualsData } from "@/types/sanity/SanityProjectData";

export function mapSanityVisuals(visuals: SanityVisualsData[]) {
  if (!Array.isArray(visuals)) return [];

  return visuals
    .filter((visual): visual is SanityVisualsData =>
      Boolean(visual?.image?.asset?._ref?.trim()),
    )
    .map(({ _key, image, caption }) => {
      const mappedImagePreview = mapSanityImage({
        image,
        width: 900,
        height: 900,
        alt: image.alt || caption || "Projektbild",
        title: image.title || caption || "",
        _type: image._type || "image",
        withHotspot: true,
      });

      const mappedImageFull = mapSanityImage({
        image,
        width: 1374,
        height: null,
        alt: image.alt || caption || "Projektbild",
        title: image.title || caption || "",
        _type: image._type || "image",
        withHotspot: false,
      });

      if (!mappedImagePreview || !mappedImageFull) return null;

      return {
        id: _key,
        imagePreview: mappedImagePreview,
        imageFull: mappedImageFull,
        caption: safeString(caption),
      };
    })
    .filter(isDefined);
}
