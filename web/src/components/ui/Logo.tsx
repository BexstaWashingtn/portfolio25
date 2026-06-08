import Link from "next/link";
import Image from "next/image";
import { Image as ImageType } from "@/types/image";

type Props = ImageType & {
  link?: string;
};

export default function Logo({
  src = "/img/logo/logo_beige_shadow.png",
  width,
  height,
  title,
  alt = "Logo Portfolio '25",
  link,
}: Props) {
  const content = (
    <Image
      src={src}
      alt={alt}
      title={title}
      width={width}
      {...(height ? { height } : null)}
    />
  );

  if (!link) {
    return content;
  }

  return (
    <Link href={`/#${link}`} aria-current='page'>
      {content}
    </Link>
  );
}
