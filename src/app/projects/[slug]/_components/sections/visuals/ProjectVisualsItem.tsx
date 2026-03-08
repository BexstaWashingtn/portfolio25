"use client";

import Image from "next/image";

type Props = {
  item: {
    src: string;
    alt: string;
    title?: string;
  };
};
export default function ProjectVisualsItem({ item }: Props) {
  return (
    <Image
      src={item.src}
      width={856}
      height={459}
      alt={item.alt}
      {...(item.title && { title: item.title })}
    />
  );
}
