import { ContactData } from "./shared/ConstactData";
import type { ImageWithType } from "./Image";
import { SkillCategory } from "./SkillCategories";
import { HeroSection } from "@/components/sections/hero/Hero.types";
import {
  SectionHeader,
  SectionSettings,
} from "@/components/sections/Section.types";

export type StartpageSectionsData = {
  heroSection: HeroSection | null;
  aboutMeSection: AboutMeSection | null;
  typeAnalysisSection: TypeAnalysisSection | null;
  workingMethodsSection: WorkingMethodSection | null;
  skillsSection: SkillsSection | null;
  projectsSection: ProjectsSection | null;
  contactSection: ContactSection | null;
};

export type SectionsData =
  | HeroSection
  | AboutMeSection
  | TypeAnalysisSection
  | WorkingMethodSection
  | SkillsSection
  | ProjectsSection
  | ContactSection;

export type AboutMeSection = {
  _type: "aboutmeSection";
  header: SectionHeader;
  settings: SectionSettings;
};

export type TypeAnalysisSection = {
  _type: "typeAnalysisSection";
  header: SectionHeader;
  content: {
    pros: string[];
    cons: string[];
  };
  settings: Pick<SectionSettings, "id">;
};

export type WorkingMethodItem = {
  _key: string;
  _type: "workingMethodItem";
  headline: string;
  icon: ImageWithType;
  text: string;
  id: string;
};

export type WorkingMethodSection = {
  _type: "workingMethodsSection";
  header: SectionHeader;
  content: {
    items: WorkingMethodItem[];
  };
  settings: Pick<SectionSettings, "id">;
};

export type SkillsSection = {
  _type: "skillsSection";
  header: SectionHeader;
  content: SkillCategory[];
  settings: SectionSettings;
};

export type ProjectsSection = {
  _type: "projectsSection";
  header: SectionHeader;
  settings: SectionSettings;
};

export type ContactSection = {
  _type: "contactSection";
  header: SectionHeader;
  settings: SectionSettings;
  content: ContactData;
};
