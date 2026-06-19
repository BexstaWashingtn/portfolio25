import { Image } from "@/types/Image";
import { SanityImage } from "@/types/sanity/SanityImage";

/* MAPPED DATA FROM SANITY */

export type InfoList = {
  icon: Image;
  headline: string;
  text: string;
};

/* DATA FROM SANITY */

export type InfoListQueryResult = {
  icon: SanityImage;
  headline: string;
  text: string;
};
