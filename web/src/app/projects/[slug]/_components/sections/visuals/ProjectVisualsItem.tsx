import React from "react";
import type { Image as ImageData } from "@/types/image";
import Image from "next/image";
import styles from "./projectVisualsItem.module.css";

type Props = {
  item: ImageData;
  index: number;
  setSelectedImageIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ProjectVisualsItem({
  item,
  setSelectedImageIndex,
  setIsModalOpen,
  index,
}: Props) {
  return (
    <button
      onClick={() => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
      }}
    >
      <figure className={`${styles.item} `}>
        <Image
          src={item.src}
          alt={item.alt}
          title={item.title}
          width={item.width}
          height={item.height}
          className={styles.image}
        />
      </figure>
    </button>
  );
}
