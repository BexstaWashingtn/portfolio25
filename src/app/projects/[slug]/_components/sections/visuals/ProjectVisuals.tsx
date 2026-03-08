"use client";

import Inner from "@/components/utils/Inner";
import styles from "./projectVisuals.module.css";
import SectionHeader from "../../sectionHeader/SectionHeader";
import CustomSwiper from "@/components/ui/customSwiper/CustomSwiper";
import ProjectVisualsItem from "./ProjectVisualsItem";

export default function ProjectVisuals() {
  const items = [
    { id: 1, src: "/img/projects/p1/visuals/test1.jpg", alt: "Mockup" },
    { id: 2, src: "/img/projects/p1/visuals/test1.jpg", alt: "Screenshot" },
    { id: 3, src: "/img/projects/p1/visuals/test1.jpg", alt: "MockUp 2" },
  ];

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
          items={items}
          renderItem={(item) => <ProjectVisualsItem item={item} />}
          swiperConfig={{
            slidesPerView: 1,
          }}
          showNavigation={true}
        />
      </Inner>
    </section>
  );
}
