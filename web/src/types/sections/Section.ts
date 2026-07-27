import type { ImageWithType } from "@/types/Image";

export type SectionSettings = {
  id: string;
  backgroundImage?: ImageWithType | null;
};

export type SectionHeader = {
  headline?: string;
  text?: string;
  image?: ImageWithType | null;
};
