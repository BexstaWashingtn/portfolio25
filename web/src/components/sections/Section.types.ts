import { ImageWithType } from "@/types/Image";
import { SanityImage } from "@/types/sanity/SanityImage";
import { SanityImageVariant } from "@/types/sanity/SanityImageVariant";

/* MAPPED DATA FROM SANITY */

export type SectionSettings = {
  id: string;
  backgroundImage?: ImageWithType | null;
};

export type SectionHeader = {
  headline?: string;
  text?: string;
  image?: ImageWithType | null;
};

/* DATA FROM SANITY */

export type SectionSettingsQueryResult = {
  id: string;
  backgroundImage?: SanityImage & SanityImageVariant;
};

export type SectionHeaderQueryResult = {
  image?: SanityImage & SanityImageVariant;
  headline?: string;
  text?: string;
};
