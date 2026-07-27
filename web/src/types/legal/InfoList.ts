import type { ImageWithType } from "@/types/Image";

type LegalPageContentBase = {
  title?: string;
  icon?: ImageWithType;
  _key?: string;
  _type?: string;
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
