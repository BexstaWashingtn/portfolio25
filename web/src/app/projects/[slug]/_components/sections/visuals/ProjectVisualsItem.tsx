import React from "react";
import { ProjectVisualsData } from "../../../types/projectData";
import Image from "next/image";
import styles from "./projectVisualsItem.module.css";

type Props = {
  item: ProjectVisualsData;
};

export default function ProjectVisualsItem({ item }: Props) {
  return (
    <figure className={`${styles.item} ${styles[item.layoutSize]}`}>
      <Image
        src={item.image.src}
        alt={item.image.alt}
        title={item.image.title}
        width={item.image.width}
        height={item.image.height}
      />
    </figure>
  );
}
