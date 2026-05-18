import buildSanitySrc from "@/sanity/utils/buildSanitySrc";
import { Image } from "@/types/image";
import { SanityImage } from "@/types/sanity/SanityImage";

type MapSanityImageProps = {
  image: SanityImage;
  width: number;
  height?: number | null;
  alt: string;
  title?: string;
  _type: string;
  withHotspot?: boolean;
};

export type SanityMappedImage = Image & {
  _type?: string;
};

export function mapSanityImage({
  image,
  width,
  height = null,
  alt,
  title,
  _type,
  withHotspot = false,
}: MapSanityImageProps): SanityMappedImage | null {
  const imageData = buildSanitySrc(image, width, height, withHotspot);

  if (!imageData) return null;

  return {
    src: imageData.src,
    width: imageData.width,
    ...(height ? { height: imageData.height } : {}),
    alt,
    _type,
    ...(title && { title }),
  };
}
