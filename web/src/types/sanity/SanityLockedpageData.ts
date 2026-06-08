import { SanityImage } from "./SanityImage";
import { SanityImageVariant } from "./SanityImageVariant";
import { HeroSectionQueryResult } from "./SanityStartpageData";

export type LockedpageQueryResult = {
  siteSettings: {
    siteLogo: SanityImage & SanityImageVariant;
  };
  startpage: {
    heroSection: HeroSectionQueryResult | null;
  };
};
