import { IMAGE_VARIANTS } from "@/sanity/constants/imageVariants";
import { mapSanityImage } from "./mapSanityImage";
import { SanityImage } from "@/types/sanity/SanityImage";

type ImageVariantKey = keyof typeof IMAGE_VARIANTS;

function isCmsImage(
  value: unknown,
): value is SanityImage & { imageVariant: ImageVariantKey } {
  return (
    typeof value === "object" &&
    value !== null &&
    "_type" in value &&
    value._type === "image" &&
    "asset" in value &&
    "imageVariant" in value &&
    typeof value.imageVariant === "string" &&
    value.imageVariant in IMAGE_VARIANTS
  );
}

export function mapImagesDeep<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map(mapImagesDeep) as T;
  }

  if (isCmsImage(value)) {
    const variant = IMAGE_VARIANTS[value.imageVariant];

    return mapSanityImage({
      image: value,
      width: variant.width,
      ...("height" in variant && { height: variant.height }),
      alt: value.alt,
      title: value.title ?? value.alt,
      _type: value._type,
    }) as T;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [key, mapImagesDeep(child)]),
    ) as T;
  }

  return value;
}
