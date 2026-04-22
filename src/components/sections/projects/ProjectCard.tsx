"use client";

import Image from "next/image";
import styles from "./projectCard.module.css";
import Stack from "@/components/utils/Stack";
import control from "@ui/primitives/controls/control.module.css";
import clsx from "clsx";
import { Project } from "./types";
import { IoEyeSharp } from "react-icons/io5";

type ProjectCardProps = {
  item: Project;
  viewed: boolean;
};

export default function ProjectCard({ item, viewed }: ProjectCardProps) {
  const slug = item.slug;

  return (
    <div className={`${styles.projectCard} ${viewed ? styles.viewed : ""}`}>
      <Stack gap='lg' justifyContent='center'>
        <Stack gap='md'>
          <div className={styles.projectCardImageCon}>
            {viewed && (
              <div
                className={styles.viewedBadge}
                title='Projekt bereits gesehen'
                aria-label='Projekt bereits gesehen'
              >
                <IoEyeSharp />
              </div>
            )}
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
        </Stack>
        <div className={styles.projectCardCtaContainer}>
          <a
            href={`/projects/${slug}`}
            className={clsx(control.control, control.primary)}
          >
            mehr erfahren
          </a>
        </div>
      </Stack>
    </div>
  );
}
