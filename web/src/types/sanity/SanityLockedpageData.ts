import { HeroSectionQueryResult } from "@/components/sections/hero/Hero.types";
import { SanityImage } from "./SanityImage";
import { SanityImageVariant } from "./SanityImageVariant";

export type LockedpageQueryResult = {
  siteSettings: {
    siteLogo: SanityImage & SanityImageVariant;
  };
  startpage: {
    heroSection: HeroSectionQueryResult | null;
  };
};
