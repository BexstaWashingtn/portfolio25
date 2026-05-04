import buildSanitySrc from "@/sanity/utils/buildSanitySrc";
import { Image } from "@/types/image";
import { SanityImage } from "@/types/sanity/SanityImage";

type MapSanityImageProps = {
  image: SanityImage;
  width: number;
  height?: number | null;
  alt: string;
  title?: string;
};

export function mapSanityImage({
  image,
  width,
  height = null,
  alt,
  title,
}: MapSanityImageProps): Image {
  const imageData = buildSanitySrc(image.asset._ref, width, height);

  return {
    src: imageData.src,
    width: imageData.width,
    height: imageData.height,
    alt,
    ...(title && { title }),
  };
}
