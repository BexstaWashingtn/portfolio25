/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import styles from "./WorkingMethod.module.css";
import Inner from "../utils/Inner";
import { useRef } from "react";
import useIsMobile from "@hooks/useIsMobile";

export default function WorkingMethod() {
  const isMobile = useIsMobile();
  const paginationRef = useRef<HTMLDivElement | null>(null);

  const items = [
    {
      icon: "/img/workMethod/icon_analytically.svg",
      title: "Analytisch",
      text: "Ich plane strukturiert, denke in Nutzer-Flows und arbeite gern mit Skizzen & Wireframes.",
    },
    {
      icon: "/img/workMethod/icon_cooperation.svg",
      title: "Kooperativ",
      text: "Ich bin lösungsorientiert, offen für Feedback und arbeite gern auf Augenhöhe – leise, aber präsent.",
    },
    {
      icon: "/img/workMethod/icon_usercentric.svg",
      title: "Nutzerzentriert",
      text: "Ich verbinde Barrierefreiheit mit Gestaltungslust – verständlich, zugänglich, individuell.",
    },
    {
      icon: "/img/workMethod/icon_technically.svg",
      title: "Technisch",
      text: "Ich schreibe modularen, sprechenden Code – lieber einfach & robust als überladen & trendy.",
    },
  ];

  return (
    <section className={styles.workingMethod} id='working-method'>
      <Inner variant='narrow' paddingTop='xl' paddingBottom='xl'>
        <h2 className={styles.h2}>Arbeitsweise</h2>

        {isMobile ? (
          // Swiper nur auf kleinen Geräten
          <>
            <Swiper
              slidesPerView={2}
              slidesPerGroup={2}
              spaceBetween={16}
              modules={[Pagination]}
              pagination={{ clickable: true, el: "#test" }}
              className={`${styles.workMethodList} ${styles.swiperTest}`}
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
              {items.map((item, index) => (
                <SwiperSlide key={index}>
                  <li className={styles.workMehtodItem}>
                    <img
                      className={styles.icon}
                      src={item.icon}
                      alt=''
                      height={80}
                    />
                    <h3 className={styles.headline}>{item.title}</h3>
                    <p className={styles.text}>{item.text}</p>
                  </li>
                </SwiperSlide>
              ))}
              <div
                id='test'
                ref={paginationRef}
                className='swiper-pagination'
              />
            </Swiper>
          </>
        ) : (
          // Ab 769px: ganz normal als Liste anzeigen
          <ul className={styles.workMethodList}>
            {items.map((item, index) => (
              <li key={index} className={styles.workMehtodItem}>
                <img
                  className={styles.icon}
                  src={item.icon}
                  alt=''
                  height={80}
                />
                <h3 className={styles.headline}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
              </li>
            ))}
          </ul>
        )}
      </Inner>
    </section>
  );
}
