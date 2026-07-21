import {
  HeroSection,
  LegalPageSections,
  LegalPageSectionsQueryResult,
} from "@/components/pages/legalPages/LegalPage.types";
import { ContentNotice } from "@/components/ui/contentNotice/ContentNotice.type";
import { mapImagesDeep } from "@/lib/mappers/sanity/mapImagesDeep";
import { ContactData } from "@/types/shared/ContactData";
import { mapInfoList } from "./mapInfoList";

export function mapLegalPageData(
  data: LegalPageSectionsQueryResult,
  contactData?: ContactData | null,
): LegalPageSections {
  return {
    ...(data.heroSection && {
      heroSection: mapImagesDeep(data.heroSection) as HeroSection,
    }),
    ...(data.contentNoticeTop && {
      contentNoticeTop: mapImagesDeep(
        data.contentNoticeTop,
      ) as ContentNotice,
    }),
    ...(data.contentNoticeBottom && {
      contentNoticeBottom: mapImagesDeep(
        data.contentNoticeBottom,
      ) as ContentNotice,
    }),
    ...(data.legalPageContent && {
      legalPageContent: mapInfoList(data.legalPageContent, contactData),
    }),
  };
}
