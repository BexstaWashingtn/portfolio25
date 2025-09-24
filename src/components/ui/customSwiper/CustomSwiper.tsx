import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { Pagination } from "swiper/modules";
import "swiper/css";
import styles from "./customSwiper.module.css";
import { ReactNode, Key } from "react";

export default function CustomSwiperr<T extends { id: Key }>({
  items,
  renderItem,
  swiperConfig,
}: {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  swiperConfig?: SwiperOptions;
}) {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        {...swiperConfig}
        modules={[Pagination]}
        className={`swiperCustomCSS`}
        pagination={{ clickable: true, el: ".swiperCustomPagination" }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id}>{renderItem(item, index)}</SwiperSlide>
        ))}
        <div className='swiperCustomPagination' />
      </Swiper>
    </div>
  );
}
