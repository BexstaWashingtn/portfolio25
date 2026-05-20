import { SanityVisualsData } from "@/types/sanity/SanityProjectData";
import { mapSanityImage } from "./mapSanityImage";
import { safeString } from "@/lib/utils/data/safeString";
import { isDefined } from "@/lib/utils/data/isDefined";

export function mapSanityVisuals(visuals: SanityVisualsData[]) {
  if (!Array.isArray(visuals)) return [];

  return visuals
    .filter((v): v is SanityVisualsData => !!v?.image?.asset?._ref?.trim())
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
