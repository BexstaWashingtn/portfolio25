import { SanityVisualsData } from "@/types/sanity/SanityProjectData";
import { mapSanityImage } from "./mapSanityImage";
import { safeString } from "@/lib/utils/data/safeString";
import { isDefined } from "@/lib/utils/data/isDefined";

export function mapSanityVisuals(visuals: SanityVisualsData[]) {
  if (!Array.isArray(visuals)) return [];

  return visuals
    .filter((v): v is SanityVisualsData => !!v?.image?.asset?._ref?.trim())
    .map(({ _key, image, caption, layoutSize }) => {
      const mappedImage = mapSanityImage({
        image,
        width: 1920,
        height: 1280,
        alt: image.alt || caption || "Projektbild",
        title: image.title || caption || "",
        _type: image._type || "image",
      });

      if (!mappedImage) return null;

      return {
        id: _key,
        image: mappedImage,
        caption: safeString(caption),
        layoutSize: getLayoutSize(layoutSize),
      };
    })
    .filter(isDefined);
}

const allowedLayoutSizes = [
  "small",
  "medium",
  "large",
  "tall",
  "wide",
] as const;

type LayoutSize = (typeof allowedLayoutSizes)[number];

function isLayoutSize(value: unknown): value is LayoutSize {
  return allowedLayoutSizes.includes(value as LayoutSize);
}

function getLayoutSize(value: unknown): LayoutSize {
  return isLayoutSize(value) ? value : "small";
}
