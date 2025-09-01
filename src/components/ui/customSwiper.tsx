import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import styles from "./customSwiper.module.css";
import WorkingMethodItem from "@components/sections/workingMethods/WorkingMethodItem";

type Props = {
  items: { id: number; icon: string; title: string; text: string }[];
  className?: string;
};
export default function CustomSwiper({ items, className }: Props) {
  const paginationRef = useRef<HTMLDivElement | null>(null);

  console.log("className", className);

  return (
    <Swiper
      slidesPerView={2}
      slidesPerGroup={2}
      spaceBetween={16}
      modules={[Pagination]}
      pagination={{ clickable: true, el: "#test" }}
      className={`${styles.defaultSwiper}`}
      breakpoints={{
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        680: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <WorkingMethodItem item={item} />
        </SwiperSlide>
      ))}
      <div
        id='test'
        ref={paginationRef}
        className={styles.defaultSwiperPagination}
      />
    </Swiper>
  );
}
