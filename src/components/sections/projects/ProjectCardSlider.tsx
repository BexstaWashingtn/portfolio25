"use client";

import CustomSwiper from "@/components/ui/customSwiper/CustomSwiper";
import ProjectCard from "./ProjectCard";
import useIsMobile from "@/lib/hooks/useIsMobile";
import type { Project } from "./types";

type Props = {
  items: Project[];
};

export default function ProjectCardSlider({ items }: Props) {
  const isDesktop = !useIsMobile({ breakpoint: 848 });
  const showNavigationSwiper = isDesktop;

  return (
    <CustomSwiper
      items={items}
      renderItem={(item) => <ProjectCard key={item.id} item={item} />}
      swiperConfig={{
        spaceBetween: 32,
        breakpoints: {
          0: { slidesPerView: 1.2 },
          848: { slidesPerView: 2 },
          1024: { spaceBetween: 64 },
          1280: { slidesPerView: 3 },
          1920: { slidesPerView: 4 },
          2440: { slidesPerView: 5 },
        },
      }}
      showNavigation={showNavigationSwiper}
    />
  );
}
