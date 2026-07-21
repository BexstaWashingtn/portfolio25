import { ImageWithType } from "@/types/Image";
import { SanityImage } from "@/types/sanity/SanityImage";

type LegalPageContentBase = {
  title?: string;
  icon?: ImageWithType;
  _key?: string;
  _type?: string;
};

/* MAPPED DATA FROM SANITY */
export type LegalPageBaseItem = {
  title: string;
  icon: ImageWithType;
};

export type LegalPageTextItem = LegalPageContentBase & {
  contentType: "text";
  text: string;
};

export type LegalPageOwnerAddressItem = LegalPageContentBase & {
  contentType: "ownerAddress";
  name?: string;
  street?: string;
  postalCode?: string;
  city?: string;
  country?: string;
};

export type LegalPageOwnerContactItem = LegalPageContentBase & {
  contentType: "ownerContact";
  phone?: string;
  email?: string;
};

export type LegalPageContentItems =
  | LegalPageTextItem
  | LegalPageOwnerAddressItem
  | LegalPageOwnerContactItem;

export type InfoList = {
  backgroundImage?: ImageWithType;
  Items: LegalPageContentItems[];
};

/* DATA FROM SANITY */

type LegalPageContentQueryBase = {
  title?: string;
  icon?: SanityImage;
  _key?: string;
  _type?: string;
};

export type LegalPageContentItemsQueryResult =
  | (LegalPageContentQueryBase & {
      contentType: "text";
      text?: string;
    })
  | (LegalPageContentQueryBase & {
      contentType: "ownerAddress";
    })
  | (LegalPageContentQueryBase & {
      contentType: "ownerContact";
    });

export type InfoListQueryResult = {
  backgroundImage?: SanityImage | null;
  Items?: LegalPageContentItemsQueryResult[] | null;
};
