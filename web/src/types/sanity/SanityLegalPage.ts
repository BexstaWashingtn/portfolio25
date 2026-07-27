import type { ContactData } from "@/types/shared/ContactData";
import type { SanityImage } from "./SanityImage";
import type { SanityImageVariant } from "./SanityImageVariant";

type LegalHeroSectionQueryResult = {
  _type: "heroSection";
  header: {
    headline?: string;
    text?: string;
  };
  settings: {
    id: string;
    backgroundImage: SanityImage & SanityImageVariant;
  };
};

type ContentNoticeQueryResult = {
  text?: string;
  _type: string;
  icon?: SanityImage & SanityImageVariant;
};

type LegalPageContentQueryBase = {
  title?: string;
  icon?: SanityImage;
  _key?: string;
  _type?: string;
};

export type LegalPageContentItemsQueryResult =
  | (LegalPageContentQueryBase & {
      contentType: "text";
      text?: string;
    })
  | (LegalPageContentQueryBase & {
      contentType: "ownerAddress";
    })
  | (LegalPageContentQueryBase & {
      contentType: "ownerContact";
    });

export type InfoListQueryResult = {
  backgroundImage?: SanityImage | null;
  Items?: LegalPageContentItemsQueryResult[] | null;
};

export type LegalPageSectionsQueryResult = {
  heroSection?: LegalHeroSectionQueryResult | null;
  contentNoticeTop?: ContentNoticeQueryResult | null;
  contentNoticeBottom?: ContentNoticeQueryResult | null;
  legalPageContent?: InfoListQueryResult | null;
};

export type LegalPageDataQueryResult = {
  contactData: ContactData | null;
  legalPage: LegalPageSectionsQueryResult | null;
};

export type { ContentNoticeQueryResult, LegalHeroSectionQueryResult };
