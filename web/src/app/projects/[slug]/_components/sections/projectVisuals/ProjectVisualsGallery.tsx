import styles from "./projectVisualsGallery.module.css";
import useIsMobile from "@/lib/hooks/useIsMobile";
import { useEffect, useState } from "react";
import { ProjectVisualsData } from "../../../types/projectData";
import ProjectVisualsItem from "./ProjectVisualsItem";
import control from "@ui/primitives/controls/control.module.css";
import Button from "@/components/ui/form/Button";
import ArrowIcon from "@/components/ui/ArrowIcon";
import CustomSwiper from "@/components/ui/customSwiper/CustomSwiper";
import ProjectVisualsModalItem from "./projectVisualsFullImage";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  visuals: ProjectVisualsData[];
};

export default function ProjectVisualsGallery({ visuals }: Props) {
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

  const isDesktop = !useIsMobile();

  return (
    <>
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

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className={styles.gallerie_modal}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
          >
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
              showNavigation={isDesktop}
              slideClassName='swiperSlideCenter'
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
