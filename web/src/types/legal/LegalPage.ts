import type { ContactData } from "@/types/shared/ContactData";
import type { HeroSection } from "@/types/sections/Hero";
import type { ContentNotice } from "./ContentNotice";
import type { InfoList } from "./InfoList";

export type LegalPageSections = {
  heroSection?: HeroSection;
  contentNoticeTop?: ContentNotice;
  contentNoticeBottom?: ContentNotice;
  legalPageContent?: InfoList;
};

export type LegalPageData = {
  contactData: ContactData | null;
  legalPage: LegalPageSections;
};
