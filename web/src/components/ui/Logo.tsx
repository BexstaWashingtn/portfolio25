import Link from "next/link";
import Image from "next/image";
import { Image as ImageType } from "@/types/image";

type Props = ImageType & {
  linkDisabled?: boolean;
  anchor: string;
};

export default function Logo({
  linkDisabled = false,
  src = "/img/logo/logo_beige_shadow.png",
  width = 53,
  height = 80,
  title,
  alt = "Logo Portfolio '25",
  anchor = "hero",
}: Props) {
  const content = (
    <Image src={src} alt={alt} title={title} width={width} height={height} />
  );

  if (linkDisabled) {
    return content;
  }

  return (
    <Link href={`/#${anchor}`} aria-current='page'>
      {content}
    </Link>
  );
}
