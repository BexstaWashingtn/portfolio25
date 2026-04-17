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
          items={visuals}
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
