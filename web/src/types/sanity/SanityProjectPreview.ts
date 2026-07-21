import { SanityImage } from "./SanityImage";

export type SanityProjectPreview = {
  _id: string;
  description: string;
  techStack: string[];
  previewImage: SanityImage;
  slug: string;
  title: string;
};
