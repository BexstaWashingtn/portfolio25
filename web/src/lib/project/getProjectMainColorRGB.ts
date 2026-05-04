import { getPortfolioMainColor } from "@/sanity/fetchPortfolio";
import { SanityProjectMainColor } from "@/types/sanity/SanityProjectData";

export async function getProjectMainColorRGB(
  projectMainColor?: SanityProjectMainColor | null,
): Promise<string> {
  const mainColor = projectMainColor ?? (await getPortfolioMainColor());

  return rgbObjectToCssString(mainColor);
}

function rgbObjectToCssString(mainColor: {
  r: number;
  g: number;
  b: number;
}): string {
  return `${mainColor.r}, ${mainColor.g}, ${mainColor.b}`;
}
