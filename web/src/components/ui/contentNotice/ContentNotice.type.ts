import { ImageWithType } from "@/types/Image";
import { SanityImage } from "@/types/sanity/SanityImage";
import { SanityImageVariant } from "@/types/sanity/SanityImageVariant";

export type ContentNoticeCore = {
  text?: string;
  _type: string;
};

/* DATA FROM SANITY */

export type ContentNotice = ContentNoticeCore & {
  icon?: ImageWithType;
};

/* MAPPED DATA FROM SANITY */

export type ContentNoticeTypeQueryResult = ContentNoticeCore & {
  icon?: SanityImage & SanityImageVariant;
};
