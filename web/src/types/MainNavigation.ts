import { SanityImage } from "./sanity/SanityImage";
import { Image } from "./Image";

export type MainNavigationItem = {
  id: string;
  label: string;
};

export type LogoDatas = {
  image: Image;
  id: string;
};

export type HeaderDatas = {
  navigation: MainNavigationItem[];
  logo: LogoDatas;
};

export type HeaderQueryResult = {
  navigation?: {
    navigation?: (MainNavigationItem | null)[];
    heroSectionId: string;
  };
  logo?: SanityImage;
} | null;
