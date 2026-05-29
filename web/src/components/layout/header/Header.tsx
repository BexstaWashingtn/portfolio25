import { getHeader } from "@/sanity/fetchHeader";
import styles from "./header.module.css";
import HeaderClient from "./HeaderClient";
import {
  MainNavigationItem,
  HeaderQueryResult,
  HeaderDatas,
} from "@/types/navigation";
import { mapSanityImage } from "@/lib/mappers/sanity/mapSanityImage";
import { FALLBACK_HEADER_LOGO } from "./constans";

export default async function Header() {
  const sanityHeaderDatas = await getHeader();

  const headerDatas = mapHeaderDatas(sanityHeaderDatas);

  if (!headerDatas) return null;

  return (
    <header className={styles.header}>
      <HeaderClient styles={styles} headerDatas={headerDatas} />
    </header>
  );
}

function isMainNavigationItem(
  item: MainNavigationItem | null,
): item is MainNavigationItem {
  return item !== null;
}

function mapHeaderDatas(data: HeaderQueryResult): HeaderDatas | null {
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
