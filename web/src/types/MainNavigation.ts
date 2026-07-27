import { SanityImage } from "./sanity/SanityImage";
import { Image } from "./Image";

export type MainNavigationItem = {
  id: string;
  label: string;
};

export type LogoData = {
  image: Image;
  id: string;
};

export type HeaderData = {
  navigation: MainNavigationItem[];
  logo: LogoData;
};

export type HeaderQueryResult = {
  navigation?: {
    navigation?: (MainNavigationItem | null)[];
    heroSectionId: string;
  };
  logo?: SanityImage;
} | null;
