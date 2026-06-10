import HeroLockOverlay from "@/components/sections/hero/HeroOverlay";
import Hero from "@/components/sections/hero/Hero";
import { getLockedpage } from "@/sanity/fetchLockedpage";
import { HeroSection } from "@/types/StartpageData";
import { LockedpageQueryResult } from "@/types/sanity/SanityLockedpageData";
import { mapSanityImage } from "@/lib/mappers/sanity/mapSanityImage";
import { IMAGE_VARIANTS } from "@/sanity/constants/imageVariants";
import { notFound } from "next/navigation";

export default async function Locked() {
  const sanityLockedpageData: LockedpageQueryResult = await getLockedpage();

  const lockedpageData = mappedLockedpageData(sanityLockedpageData);

  if (!lockedpageData) {
    notFound();
  }

  return (
    <Hero data={lockedpageData}>
      <HeroLockOverlay
        icon='locked'
        text='Die Seite ist für unautorisierte Zugriffe gesperrt.'
      />
    </Hero>
  );
}

function mappedLockedpageData(data: LockedpageQueryResult): HeroSection | null {
  if (!data.startpage.heroSection || !data.siteSettings.siteLogo) {
    return null;
  }

  const logo = data.siteSettings.siteLogo;
  const logoVariant = IMAGE_VARIANTS[logo.imageVariant];
  const bgImage = data.startpage.heroSection.settings?.backgroundImage;
  const bgImageVariant = bgImage ? IMAGE_VARIANTS[bgImage.imageVariant] : null;

  return {
    ...data.startpage.heroSection,

    header: {
      ...data.startpage.heroSection.header,
      image: mapSanityImage({
        image: logo,
        width: logoVariant.width,
        ...("height" in logoVariant ? { height: logoVariant.height } : {}),
        alt: logo.alt,
        title: logo.title,
        _type: logo._type,
      }),
    },

    settings: {
      ...data.startpage.heroSection.settings,
      backgroundImage:
        bgImage && bgImageVariant
          ? mapSanityImage({
              image: bgImage,
              width: bgImageVariant.width,
              ...("height" in bgImageVariant
                ? { height: bgImageVariant.height }
                : {}),
              alt: bgImage.alt,
              title: bgImage.title,
              _type: bgImage._type,
            })
          : null,
    },
  };
}
