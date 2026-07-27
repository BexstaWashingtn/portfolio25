import { SanityProjectMainColor } from "@/types/sanity/SanityProjectData";

export function getProjectMainColorRGB(
  mainColor: SanityProjectMainColor,
): string {
  return `${mainColor.r}, ${mainColor.g}, ${mainColor.b}`;
}
