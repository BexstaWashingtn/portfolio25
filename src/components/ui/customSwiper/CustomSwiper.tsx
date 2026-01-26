import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { SwiperOptions } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import styles from "./customSwiper.module.css";
import { ReactNode, Key, useRef, useEffect } from "react";
import CarouselNavButton from "./CarouselNavButton";
import Stack from "@/components/utils/Stack";

// TODO: add Swiper Arrows

export default function CustomSwiperr<T extends { id: Key }>({
  items,
  renderItem,
  swiperConfig,
}: {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  swiperConfig?: SwiperOptions;
}) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    if (!prevRef.current || !nextRef.current) return;

    const navigation = swiper.params.navigation;

    if (!navigation || typeof navigation === "boolean") return;

    navigation.prevEl = prevRef.current;
    navigation.nextEl = nextRef.current;

    swiper.navigation.init();
    swiper.navigation.update();
  }, []);

  return (
    <div className={styles.swiperContainer}>
      <Stack direction='row' gap='md'>
        <CarouselNavButton
          buttonRef={prevRef}
          direction='left'
          label='Vorheriges Projekt'
        />

        <Swiper
          {...swiperConfig}
          modules={[Pagination, Navigation]}
          className={`swiperCustomCSS`}
          pagination={{ clickable: true, el: ".swiperCustomPagination" }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={item.id}>{renderItem(item, index)}</SwiperSlide>
          ))}

          <div className='swiperCustomPagination' />
        </Swiper>

        <CarouselNavButton
          buttonRef={nextRef}
          direction='right'
          label='Nächstes Projekt'
        />
      </Stack>
    </div>
  );
}
