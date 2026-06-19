import { Image } from "@/types/Image";
import { SanityImage } from "@/types/sanity/SanityImage";

/* DATA FROM SANITY */

export type ContentNotice = {
  icon?: Image;
  text?: string;
};

/* MAPPED DATA FROM SANITY */

export type ContentNoticeTypeQueryResult = {
  icon?: SanityImage;
  text?: string;
};
