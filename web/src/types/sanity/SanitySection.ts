import type { SanityImage } from "./SanityImage";
import type { SanityImageVariant } from "./SanityImageVariant";

export type SectionSettingsQueryResult = {
  id: string;
  backgroundImage?: SanityImage & SanityImageVariant;
};

export type SectionHeaderQueryResult = {
  image?: SanityImage & SanityImageVariant;
  headline?: string;
  text?: string;
};

export type HeroSectionQueryResult = {
  _type: "heroSection";
  settings: SectionSettingsQueryResult;
  header: SectionHeaderQueryResult;
};
