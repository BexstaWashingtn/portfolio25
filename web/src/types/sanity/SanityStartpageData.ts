import {
  SectionHeaderQueryResult,
  SectionSettingsQueryResult,
} from "@/components/sections/Section.types";
import { SkillCategory } from "../SkillCategories";
import { SanityImage } from "./SanityImage";
import { SanityImageVariant } from "./SanityImageVariant";
import { HeroSectionQueryResult } from "@/components/sections/hero/Hero.types";

export type StartpageSectionQueryResult = {
  heroSection: HeroSectionQueryResult | null;
  aboutMeSection: AboutMeSectionQueryResult | null;
  typeAnalysisSection: TypeAnalysisSectionQueryResult | null;
  workingMethodsSection: WorkingMethodsSectionQueryResult | null;
  skillsSection: SkillsSectionQueryResult | null;
  projectsSection: ProjectsSectionQueryResult | null;
  contactSection: ContactSectionQueryResult | null;
};

export type SectionQueryResult =
  | HeroSectionQueryResult
  | AboutMeSectionQueryResult
  | TypeAnalysisSectionQueryResult
  | WorkingMethodsSectionQueryResult
  | ProjectsSectionQueryResult
  | SkillsSectionQueryResult
  | ContactSectionQueryResult;

export type ContactInformationQueryResult = {
  firstName: string;
  lastName: string;
  address: {
    city: string;
    country: string;
    postalcode: string;
    street: string;
  };
  phone: string;
  email: string;
  github: string;
};

export type StartpageQueryResult = {
  siteSettings: {
    contactInformation: ContactInformationQueryResult;
    siteLogo: SanityImage & SanityImageVariant;
  };
  startpage: StartpageSectionQueryResult;
};

export type AboutMeSectionQueryResult = {
  _type: "aboutmeSection";
  settings: SectionSettingsQueryResult;
  header: SectionHeaderQueryResult;
};

export type TypeAnalysisSectionQueryResult = {
  _type: "typeAnalysisSection";
  settings: {
    id: string;
  };
  header: {
    headline: string;
  };
  content: {
    pros: string[];
    cons: string[];
  };
};

export type WorkingMethodItemQueryResult = {
  headline: string;
  text: string;
  icon: SanityImage & SanityImageVariant;
  _key: string;
  _type: "workingMethodItem";
};

export type WorkingMethodsSectionQueryResult = {
  _type: "workingMethodsSection";
  settings: {
    id: string;
  };
  header: {
    headline: string;
  };
  content: {
    items: WorkingMethodItemQueryResult[];
  };
};

export type ProjectsSectionQueryResult = {
  _type: "projectsSection";
  settings: SectionSettingsQueryResult;
  header: SectionHeaderQueryResult;
};

export type ContactSectionQueryResult = {
  _type: "contactSection";
  settings: SectionSettingsQueryResult;
  header: SectionHeaderQueryResult;
};

export type SkillsSectionQueryResult = {
  _type: "skillsSection";
  settings: SectionSettingsQueryResult;
  header: SectionHeaderQueryResult;
  content: SkillCategory[];
};

/* ---------------------------------------------- */
/* Prepared Types */

export type HeroSectionWithHeaderQueryResult = HeroSectionQueryResult & {
  header: SectionHeaderQueryResult;
};
export type ContactSectionWithContentQueryResult = ContactSectionQueryResult & {
  content: ContactInformationQueryResult;
};

export type PreparedSectionQueryResult =
  | HeroSectionWithHeaderQueryResult
  | AboutMeSectionQueryResult
  | TypeAnalysisSectionQueryResult
  | WorkingMethodsSectionQueryResult
  | ProjectsSectionQueryResult
  | SkillsSectionQueryResult
  | ContactSectionWithContentQueryResult;
