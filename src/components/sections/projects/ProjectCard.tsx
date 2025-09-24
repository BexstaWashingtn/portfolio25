"use client";

import Image from "next/image";
import styles from "./projectCard.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@/components/ui/Button";

type Project = {
  id: number;
  image: { src: string; alt: string; width: number; height: number };
  title: string;
  description: string;
  tags: string[];
};

type ProjectCardProps = {
  item: Project;
};

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCardImageCon}>
        <Image
          src={item.image.src}
          alt={item.image.alt}
          width={item.image.width}
          height={item.image.height}
          priority
          className={styles.projectCardImage}
        />
      </div>
      <div className={styles.projectCardText}>
        <h3 className={styles.projectCardHeadline}>{item.title}</h3>
        <p className={styles.projectCardTextContent}>{item.description}</p>
      </div>
      <div className={styles.projectCardTags}>
        {item.tags &&
          item.tags.map((tag, index) => (
            <span key={index} className={styles.projectCardTag}>
              {tag}
            </span>
          ))}
      </div>
      <div className={styles.projectCardCtaContainer}>
        <Button>mehr erfahren</Button>
      </div>
    </div>
  );
}
