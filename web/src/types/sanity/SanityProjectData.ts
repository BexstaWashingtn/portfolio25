import { SanityImage } from "./SanityImage";

export type ProjectTechstackRaw = {
  frontend?: string[];
  backend?: string[];
  tools?: string[];
};

export type SanityProjectMainColor = {
  r: number;
  g: number;
  b: number;
};

export type SanityVisualsData = {
  caption: string;
  image: SanityImage;
  _key: string;
};
