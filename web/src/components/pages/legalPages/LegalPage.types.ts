import { ContactData } from "@/types/shared/ContactData";
import type {
  ContentNotice as ContentNoticeType,
  ContentNoticeTypeQueryResult,
} from "@components/ui/contentNotice/ContentNotice.type";
import {
  InfoList as InfoListType,
  InfoListQueryResult,
} from "@/components/ui/infoList/InfoList.type";
import { SanityImage } from "@/types/sanity/SanityImage";
import { SanityImageVariant } from "@/types/sanity/SanityImageVariant";
import { ImageWithType } from "@/types/Image";

export type HeroSectionCore = {
  _type: "heroSection";
  header: {
    headline?: string;
    text?: string;
  };
  settings: {
    id: string;
  };
};

/* MAPPED DATA FROM SANITY */

export type HeroSection = HeroSectionCore & {
  settings: {
    backgroundImage: ImageWithType;
  };
};

export type LegalPageSections = {
  heroSection?: HeroSection;
  contentNoticeTop?: ContentNoticeType;
  contentNoticeBottom?: ContentNoticeType;
  legalPageContent?: InfoListType;
};

export type LegalPageData = {
  contactData: ContactData | null;
  legalPage: LegalPageSections;
};

/* DATA FROM SANITY */

export type HeroSectionQueryResult = HeroSectionCore & {
  settings: {
    backgroundImage: SanityImage & SanityImageVariant;
  };
};

export type LegalPageSectionsQueryResult = {
  heroSection?: HeroSectionQueryResult | null;
  contentNoticeTop?: ContentNoticeTypeQueryResult | null;
  contentNoticeBottom?: ContentNoticeTypeQueryResult | null;
  legalPageContent?: InfoListQueryResult | null;
};

export type LegalPageDataQueryResult = {
  contactData: ContactData | null;
  legalPage: LegalPageSectionsQueryResult | null;
};
