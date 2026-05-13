import { buildSrc } from "@sanity-image/url-builder";
import { getSanityData } from "../getSanityData";
import { SanityImage } from "@/types/sanity/SanityImage";

const { projectId, dataset } = getSanityData();

export default function buildSanitySrc(
  image: SanityImage,
  width: number,
  height: number | null = null,
  withHotspot = false,
) {
  if (!image?.asset?._ref?.trim()) {
    return null;
  }

  return buildSrc({
    id: image?.asset?._ref,
    width,
    ...(height && { height }),
    mode: "cover",
    ...(withHotspot && {
      crop: image.crop,
      hotspot: image.hotspot,
    }),
    baseUrl: `https://cdn.sanity.io/images/${projectId}/${dataset}/`,
  });
}
