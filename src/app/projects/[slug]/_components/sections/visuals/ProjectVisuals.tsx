"use client";

import Inner from "@/components/utils/Inner";
import styles from "./projectVisuals.module.css";
import SectionHeader from "../../sectionHeader/SectionHeader";
import CustomSwiper from "@/components/ui/customSwiper/CustomSwiper";
import ProjectVisualsItem from "./ProjectVisualsItem";
import { ProjectVisualsData } from "./../../../types/projectData";
import { safeString } from "@/lib/utils/data/safeString";

type Props = {
  visuals: ProjectVisualsData[];
};

export default function ProjectVisuals({ visuals }: Props) {
  const cleanVisualsData = cleanVisuals(visuals);

  return (
    !!cleanVisualsData.length && (
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
    )
  );
}

function cleanVisuals(visuals: ProjectVisualsData[]) {
  if (!Array.isArray(visuals)) return [];

  const trimmedVisuals = visuals.map(({ id, src, alt, title }) => {
    const srcString = safeString(src);
    const altString = safeString(alt, "Projektbild");
    const titleString = safeString(title, "");

    return { id, src: srcString, alt: altString, title: titleString };
  });

  const cleanedVisuals = trimmedVisuals.filter(({ src }) => src !== "");

  return cleanedVisuals;
}
