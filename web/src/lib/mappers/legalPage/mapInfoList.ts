import {
  InfoList,
  LegalPageContentItems,
} from "@/types/legal/InfoList";
import {
  InfoListQueryResult,
  LegalPageContentItemsQueryResult,
} from "@/types/sanity/SanityLegalPage";
import { mapSanityImage } from "@/lib/mappers/sanity/mapSanityImage";
import { ContactData } from "@/types/shared/ContactData";
import { ImageWithType } from "@/types/Image";
import { SanityImage } from "@/types/sanity/SanityImage";

export function mapInfoList(
  data: InfoListQueryResult,
  contactData?: ContactData | null,
): InfoList {
  const backgroundImage = data.backgroundImage
    ? mapSanityImage({
        image: data.backgroundImage,
        width: 1920,
        height: 1080,
        alt: data.backgroundImage.alt,
        title: data.backgroundImage.title,
        _type: data.backgroundImage._type,
      })
    : null;

  return {
    ...(backgroundImage && { backgroundImage }),
    Items: (data.Items ?? [])
      .map((item) => mapInfoListItem(item, contactData))
      .filter((item): item is LegalPageContentItems => item !== null),
  };
}

function mapInfoListItem(
  item: LegalPageContentItemsQueryResult,
  contactData?: ContactData | null,
): LegalPageContentItems | null {
  const icon = item.icon ? mapOptionalImage(item.icon, 50, 50) : null;
  const base = {
    title: item.title,
    ...(icon && { icon }),
    _key: item._key,
    _type: item._type,
  };

  switch (item.contentType) {
    case "text":
      if (!item.text) {
        return null;
      }

      return {
        ...base,
        contentType: item.contentType,
        text: item.text,
      };

    case "ownerAddress":
      if (!contactData) {
        return null;
      }

      return {
        ...base,
        contentType: item.contentType,
        name: `${contactData.firstName} ${contactData.lastName}`,
        ...contactData.address,
      };

    case "ownerContact":
      if (!contactData) {
        return null;
      }

      return {
        ...base,
        contentType: item.contentType,
        phone: contactData.phone,
        email: contactData.email,
      };

    default:
      return null;
  }
}

function mapOptionalImage(
  image: SanityImage,
  width: number,
  height: number,
): ImageWithType | null {
  return mapSanityImage({
    image,
    width,
    height,
    alt: image.alt ?? "",
    title: image.title,
    _type: image._type,
  });
}
