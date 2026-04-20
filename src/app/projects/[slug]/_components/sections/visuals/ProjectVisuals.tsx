"use client";

import Inner from "@/components/utils/Inner";
import styles from "./projectVisuals.module.css";
import SectionHeader from "../../sectionHeader/SectionHeader";
import CustomSwiper from "@/components/ui/customSwiper/CustomSwiper";
import ProjectVisualsItem from "./ProjectVisualsItem";
import { ProjectVisualsData } from "./../../../types/projectData";

type Props = {
  visuals: ProjectVisualsData[];
};

export default function ProjectVisuals({ visuals }: Props) {
  const cleanVisualsData = cleanVisuals(visuals);

  return (
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
      <Inner paddingTop='md' paddingBottom='md' variant='swiper'>
        <CustomSwiper
          items={cleanVisualsData}
          renderItem={(item) => <ProjectVisualsItem item={item} />}
          swiperConfig={{
            slidesPerView: 1,
          }}
          showNavigation
        />
      </Inner>
    </section>
  );
}

function cleanVisuals(visuals: ProjectVisualsData[]) {
  if (!Array.isArray(visuals)) return [];

  const trimmedVisuals = visuals.map(({ id, src, alt }) => {
    const srcString = typeof src === "string" ? src : "";
    const altString = typeof alt === "string" ? alt : "Projektbild";

    return { id, src: srcString.trim(), alt: altString.trim() };
  });

  const cleanedVisuals = trimmedVisuals.filter(({ src }) => {
    return src !== "";
  });

  return cleanedVisuals;
}
