import { SanityVisualsData } from "@/types/sanity/SanityProjectData";
import { mapSanityImage } from "./mapSanityImage";
import { safeString } from "@/lib/utils/data/safeString";
import { isDefined } from "@/lib/utils/data/isDefined";

export function mapSanityVisuals(visuals: SanityVisualsData[]) {
  if (!Array.isArray(visuals)) return [];

  return visuals
    .filter((v): v is SanityVisualsData => !!v?.image?.asset?._ref?.trim())
    .map(({ _key, image, caption, layoutSize }) => {
      const safeLayoutSize = getLayoutSize(layoutSize);
      const { width, height } = imageSizeByLayout[safeLayoutSize];

      const mappedImage = mapSanityImage({
        image,
        width: width,
        height: height,
        alt: image.alt || caption || "Projektbild",
        title: image.title || caption || "",
        _type: image._type || "image",
      });

      if (!mappedImage) return null;

      return {
        id: _key,
        ...mappedImage,
        caption: safeString(caption),
        layoutSize: safeLayoutSize,
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

const imageSizeByLayout: Record<LayoutSize, { width: number; height: number }> =
  {
    small: { width: 600, height: 600 },
    medium: { width: 900, height: 600 },
    large: { width: 1200, height: 1200 },
    tall: { width: 600, height: 1200 },
    wide: { width: 1400, height: 800 },
  };

function isLayoutSize(value: unknown): value is LayoutSize {
  return allowedLayoutSizes.includes(value as LayoutSize);
}

function getLayoutSize(value: unknown): LayoutSize {
  return isLayoutSize(value) ? value : "small";
}
