import { LegalPageSections } from "@/types/legal/LegalPage";
import type { HeroSection } from "@/types/sections/Hero";
import type { ContentNotice } from "@/types/legal/ContentNotice";
import type {
  ContentNoticeQueryResult,
  LegalHeroSectionQueryResult,
  LegalPageSectionsQueryResult,
} from "@/types/sanity/SanityLegalPage";
import { mapSanityImage } from "@/lib/mappers/sanity/mapSanityImage";
import { IMAGE_VARIANTS } from "@/sanity/constants/imageVariants";
import { ImageWithType } from "@/types/Image";
import { SanityImage } from "@/types/sanity/SanityImage";
import { SanityImageVariant } from "@/types/sanity/SanityImageVariant";
import { ContactData } from "@/types/shared/ContactData";
import { mapInfoList } from "./mapInfoList";

export function mapLegalPageData(
  data: LegalPageSectionsQueryResult,
  contactData?: ContactData | null,
): LegalPageSections {
  const heroSection = data.heroSection
    ? mapHeroSection(data.heroSection)
    : null;

  return {
    ...(heroSection && { heroSection }),
    ...(data.contentNoticeTop && {
      contentNoticeTop: mapContentNotice(data.contentNoticeTop),
    }),
    ...(data.contentNoticeBottom && {
      contentNoticeBottom: mapContentNotice(data.contentNoticeBottom),
    }),
    ...(data.legalPageContent && {
      legalPageContent: mapInfoList(data.legalPageContent, contactData),
    }),
  };
}

function mapHeroSection(
  section: LegalHeroSectionQueryResult,
): HeroSection | null {
  const backgroundImage = mapImage(section.settings.backgroundImage);
  if (!backgroundImage) return null;

  return {
    _type: section._type,
    header: section.header,
    settings: {
      id: section.settings.id,
      backgroundImage,
    },
  };
}

function mapContentNotice(
  notice: ContentNoticeQueryResult,
): ContentNotice {
  const icon = notice.icon ? mapImage(notice.icon) : null;

  return {
    _type: notice._type,
    ...(notice.text && { text: notice.text }),
    ...(icon && { icon }),
  };
}

function mapImage(
  image: SanityImage & SanityImageVariant,
): ImageWithType | null {
  const variant = IMAGE_VARIANTS[image.imageVariant];

  return mapSanityImage({
    image,
    width: variant.width,
    height: variant.height,
    alt: image.alt ?? "",
    title: image.title ?? image.alt,
    _type: image._type,
  });
}
