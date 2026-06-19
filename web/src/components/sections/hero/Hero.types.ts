import {
  SectionHeader,
  SectionHeaderQueryResult,
  SectionSettings,
  SectionSettingsQueryResult,
} from "../Section.types";

/* MAPPED DATA FROM SANITY */

export type HeroSection = {
  _type: "heroSection";
  header: SectionHeader;
  settings: SectionSettings;
};

/* DATA FROM SANITY */

export type HeroSectionQueryResult = {
  _type: "heroSection";
  settings: SectionSettingsQueryResult;
  header: SectionHeaderQueryResult;
};
