import React from "react";
import { ProjectVisualsData } from "../../../types/projectData";
import Image from "next/image";
import styles from "./projectVisualsItem.module.css";

type Props = {
  item: ProjectVisualsData;
};

export default function ProjectVisualsItem({ item }: Props) {
  return (
    <figure className={`${styles.item} `}>
      <Image
        src={item.src}
        alt={item.alt}
        title={item.title}
        width={item.width}
        height={item.height}
        objectFit='crop'
        className={styles.image}
      />
    </figure>
  );
}
