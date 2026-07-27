import { mapSanityImage } from "@/lib/mappers/sanity/mapSanityImage";
import type {
  HeaderData,
  HeaderQueryResult,
  MainNavigationItem,
} from "@/types/MainNavigation";

const FALLBACK_HEADER_LOGO = {
  src: "/img/logo/logo_beige.svg",
  alt: "Logo Portfolio '25",
  width: 53,
  height: 80,
  title: "Portfolio '25",
};

function isMainNavigationItem(
  item: MainNavigationItem | null,
): item is MainNavigationItem {
  return item !== null;
}

export function mapHeaderData(data: HeaderQueryResult): HeaderData | null {
  if (!data) return null;

  const logoImage = data.logo
    ? mapSanityImage({
        image: data.logo,
        width: 53,
        height: 80,
        alt: data.logo.alt ?? "Logo Portfolio '25",
        title: data.logo.title,
        _type: data.logo._type,
      })
    : null;

  return {
    navigation: data.navigation?.navigation?.filter(isMainNavigationItem) ?? [],
    logo: {
      image: {
        src: logoImage?.src ?? FALLBACK_HEADER_LOGO.src,
        alt: logoImage?.alt ?? FALLBACK_HEADER_LOGO.alt,
        width: logoImage?.width ?? FALLBACK_HEADER_LOGO.width,
        height: logoImage?.height ?? FALLBACK_HEADER_LOGO.height,
        title: logoImage?.title ?? FALLBACK_HEADER_LOGO.title,
      },
      id: data.navigation?.heroSectionId ?? "hero",
    },
  };
}
