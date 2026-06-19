import { ContactData } from "@/types/shared/ConstactData";
import type {
  ContentNotice as ContentNoticeType,
  ContentNoticeTypeQueryResult,
} from "@components/ui/contentNotice/ContentNotice.type";
import {
  InfoList as InfoListType,
  InfoListQueryResult,
} from "@/components/ui/infoList/InfoList.type";
import {
  HeroSection,
  HeroSectionQueryResult,
} from "@/components/sections/hero/Hero.types";

/* MAPPED DATA FROM SANITY */

export type LegalPageSections = {
  heroSection: HeroSection;
  pageIntro: ContentNoticeType;
  pageOutro: ContentNoticeType;
  content: InfoListType[];
};

export type LegalPageData = {
  contactData: ContactData | null;
  legalPage: LegalPageSections;
};

/* DATA FROM SANITY */

export type LegalPageSectionsQueryResult = {
  heroSection: HeroSectionQueryResult;
  pageIntro: ContentNoticeTypeQueryResult;
  pageOutro: ContentNoticeTypeQueryResult;
  content: InfoListQueryResult[];
};

export type LegalPageDataQueryResult = {
  contactData: ContactData | null;
  legalPage: LegalPageSections;
};
