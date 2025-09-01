import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { Pagination } from "swiper/modules";
import "swiper/css";
import WorkingMethodItem from "@components/sections/workingMethods/WorkingMethodItem";

type Props = {
  items: { id: number; icon: string; title: string; text: string }[];
  swiperConfig?: SwiperOptions;
};
export default function CustomSwiper({ items, swiperConfig }: Props) {
  return (
    <Swiper
      {...swiperConfig}
      modules={[Pagination]}
      className={`swiperCustomCSS`}
      pagination={{ clickable: true, el: ".swiperCustomPagination" }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <WorkingMethodItem item={item} />
        </SwiperSlide>
      ))}
      <div className='swiperCustomPagination' />
    </Swiper>
  );
}
