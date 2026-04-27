import { buildSrc } from "@sanity-image/url-builder";
import { getSanityData } from "../getSanityData";

const { projectId, dataset } = getSanityData();

export default function buildSanitySrc(
  _ref: string,
  width: number,
  height: number | null = null,
) {
  return buildSrc({
    id: _ref,
    width,
    ...(height && { height }),
    baseUrl: `https://cdn.sanity.io/images/${projectId}/${dataset}/`,
  });
}
