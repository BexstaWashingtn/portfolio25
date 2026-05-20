"use client";

import Inner from "@/components/utils/Inner";
import styles from "./projectVisuals.module.css";
import SectionHeader from "../../sectionHeader/SectionHeader";
import { ProjectVisualsData } from "../../../types/projectData";
import ProjectVisualsItem from "./ProjectVisualsItem";
import { useEffect, useState } from "react";
import CustomSwiper from "@/components/ui/customSwiper/CustomSwiper";
import ProjectVisualsModalItem from "./ProjectVisualsModalItem";
import control from "@ui/primitives/controls/control.module.css";
import ArrowIcon from "@/components/ui/ArrowIcon";
import Button from "@/components/ui/form/Button";
import useIsMobile from "@/lib/hooks/useIsMobile";

type Props = {
  visuals: ProjectVisualsData[];
};

export default function ProjectVisuals({ visuals }: Props) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const closeModalHandler = () => {
    setSelectedImageIndex(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isModalOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModalHandler();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const isMobile = useIsMobile();

  return (
    !!visuals.length && (
      <section className={styles.visuals}>
        <Inner paddingBottom='md' variant='narrow'>
          <SectionHeader
            headline='Visuelle Darstellung'
            icon={{
              src: "/img/projects/icons/icon_visuals.svg",
              alt: "Visuelle Projekt Darstellung",
            }}
          />
        </Inner>
        <Inner paddingTop='md' paddingBottom='xxl' variant='wide'>
          <div className={styles.visuals__grid}>
            {visuals.map((item: ProjectVisualsData, index: number) => (
              <ProjectVisualsItem
                key={item.id}
                item={item.imagePreview}
                setSelectedImageIndex={setSelectedImageIndex}
                setIsModalOpen={setIsModalOpen}
                index={index}
              />
            ))}
          </div>

          {isModalOpen && (
            <div className={styles.gallerie_modal}>
              <div className={styles.gallerie_modalNavigation}>
                <Button
                  aria-label='Close Modal'
                  type='button'
                  className={control.iconButton}
                  onClick={closeModalHandler}
                  variant='icon-primary'
                >
                  <ArrowIcon direction='close' className={control.icon} />
                </Button>
              </div>
              <CustomSwiper
                items={visuals}
                renderItem={(item) => (
                  <ProjectVisualsModalItem
                    key={item.id}
                    item={item.imageFull}
                    caption={item.caption}
                  />
                )}
                swiperConfig={{
                  slidesPerView: 1,
                  initialSlide: selectedImageIndex ?? 0,
                }}
                showNavigation={!isMobile}
                slideClassName='swiperSlideCenter'
              />
            </div>
          )}
        </Inner>
      </section>
    )
  );
}
