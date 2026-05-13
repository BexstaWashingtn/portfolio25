"use client";

import Inner from "@/components/utils/Inner";
import styles from "./projectVisuals.module.css";
import SectionHeader from "../../sectionHeader/SectionHeader";
import { ProjectVisualsData } from "../../../types/projectData";
import ProjectVisualsItem from "./ProjectVisualsItem";

type Props = {
  visuals: ProjectVisualsData[];
};

export default function ProjectVisuals({ visuals }: Props) {
  return (
    !!visuals.length && (
      <section className={styles.visuals}>
        <Inner paddingTop='md' paddingBottom='md' variant='narrow'>
          <SectionHeader
            headline='Visuelle Darstellung'
            icon={{
              src: "/img/projects/icons/icon_visuals.svg",
              alt: "Visuelle Projekt Darstellung",
            }}
          />
        </Inner>
        <Inner paddingTop='md' paddingBottom='md' variant='wide'>
          <div className={styles.visuals__grid}>
            {visuals.map((item: ProjectVisualsData) => (
              <ProjectVisualsItem key={item.id} item={item} />
            ))}
          </div>
        </Inner>
      </section>
    )
  );
}
