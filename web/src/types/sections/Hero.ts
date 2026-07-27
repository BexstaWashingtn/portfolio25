import type { SectionHeader, SectionSettings } from "./Section";

export type HeroSection = {
  _type: "heroSection";
  header: SectionHeader;
  settings: SectionSettings;
};
