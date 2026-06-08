import buildSanitySrc from "@/sanity/utils/buildSanitySrc";
import { SanityImage } from "@/types/sanity/SanityImage";
import { ImageWithType } from "@/types/StartpageData";

type MapSanityImageProps = {
  image: SanityImage;
  width: number;
  height?: number | null;
  alt: string;
  title?: string;
  _type: "image";
  withHotspot?: boolean;
};

export function mapSanityImage({
  image,
  width,
  height = null,
  alt,
  title,
  _type,
  withHotspot = false,
}: MapSanityImageProps): ImageWithType | null {
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
