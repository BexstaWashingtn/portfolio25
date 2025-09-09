"use client";

import Image from "next/image";
import styles from "./projectsCardSlider.module.css";
import Button from "./ui/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useState } from "react";

export default function ProjectsCardSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  //const [activeIndex, setActiveIndex] = useState(0);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <>
      <div className={styles.projectCardSliderArrows}>
        <button
          onClick={handlePrev}
          className={styles.arrowButton}
          disabled={isBeginning}
          aria-disabled={isBeginning}
        >
          <Image
            src='img/icons/icon_arrow_left.svg'
            width={20}
            height={20}
            alt='Slider Arrow Left'
            className={styles.arrow}
          />
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={32}
        slidesPerView={2}
        pagination={{
          el: ".customPagination",
          clickable: true,
        }}
        grabCursor={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          920: {
            slidesPerView: 2,
          },
        }}
        className={styles.swiperSlider}
      >
        <SwiperSlide key={1}>
          <div className={styles.projectCard}>
            <div className={styles.projectCardImageCon}>
              <Image
                src='/img/projects/logo_bird.svg'
                alt='Project Logo Bird'
                width={151}
                height={160}
                priority
                className={styles.projectCardImage}
              />
            </div>
            <div className={styles.projectCardText}>
              <h3 className={styles.projectCardHeadline}>
                Projektname / Titel
              </h3>
              <p className={styles.projectCardTextContent}>
                Rezeptbuch-App mit Fokus auf UX-Barrierefreiheit. Von der
                Nutzerforschung bis zur finalen Umsetzung – konzipiert,
                gestaltet und umgesetzt mit Next.js & Tailwind.
              </p>
            </div>
            <div className={styles.projectCardTags}>
              <span className={styles.projectCardTag}>UX Research</span>
              <span className={styles.projectCardTag}>Wireframing</span>
              <span className={styles.projectCardTag}>Prototyping</span>
              <span className={styles.projectCardTag}>Development</span>
            </div>
            <div className={styles.projectCardCtaContainer}>
              <Button>mehr erfahren</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={2}>
          <div className={styles.projectCard}>
            <div className={styles.projectCardImageCon}>
              <Image
                src='/img/projects/logo_violet.svg'
                alt='Project Logo Violet photographes'
                width={266}
                height={120}
                priority
                className={styles.projectCardImage}
              />
            </div>
            <div className={styles.projectCardText}>
              <h3 className={styles.projectCardHeadline}>
                Projektname / Titel
              </h3>
              <p className={styles.projectCardTextContent}>
                Lorem ipsum dolor sit amet consectetur. Quisque proin pretium
                quam porttitor risus amet dis. Amet consequat consectetur orci
                adipiscing. Proin scelerisque integer ut molestie ultricies dis.
              </p>
            </div>
            <div className={styles.projectCardTags}>
              <span className={styles.projectCardTag}>UX Research</span>
              <span className={styles.projectCardTag}>Wireframing</span>
              <span className={styles.projectCardTag}>Prototyping</span>
              <span className={styles.projectCardTag}>Development</span>
            </div>
            <div className={styles.projectCardCtaContainer}>
              <Button>mehr erfahren</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={3}>
          <div className={styles.projectCard}>
            <div className={styles.projectCardImageCon}>
              <Image
                src='/img/projects/logo_m.svg'
                alt='Project Logo M'
                width={160}
                height={160}
                priority
                className={styles.projectCardImage}
              />
            </div>
            <div className={styles.projectCardText}>
              <h3 className={styles.projectCardHeadline}>
                Projektname / Titel
              </h3>
              <p className={styles.projectCardTextContent}>
                Lorem ipsum dolor sit amet consectetur. Quisque proin pretium
                quam porttitor risus amet dis. Amet consequat consectetur orci
                adipiscing. Proin scelerisque integer ut molestie ultricies dis.
              </p>
            </div>
            <div className={styles.projectCardTags}>
              <span className={styles.projectCardTag}>UX Research</span>
              <span className={styles.projectCardTag}>Wireframing</span>
              <span className={styles.projectCardTag}>Prototyping</span>
              <span className={styles.projectCardTag}>Development</span>
            </div>
            <div className={styles.projectCardCtaContainer}>
              <Button>mehr erfahren</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={4}>
          <div className={styles.projectCard}>
            <div className={styles.projectCardImageCon}>
              <Image
                src='/img/projects/logo_pen.svg'
                alt='Project Pen Dev - Draw your World'
                width={160}
                height={160}
                priority
                className={styles.projectCardImage}
              />
            </div>
            <div className={styles.projectCardText}>
              <h3 className={styles.projectCardHeadline}>
                Projektname / Titel
              </h3>
              <p className={styles.projectCardTextContent}>
                Lorem ipsum dolor sit amet consectetur. Quisque proin pretium
                quam porttitor risus amet dis. Amet consequat consectetur orci
                adipiscing. Proin scelerisque integer ut molestie ultricies dis.
              </p>
            </div>
            <div className={styles.projectCardTags}>
              <span className={styles.projectCardTag}>UX Research</span>
              <span className={styles.projectCardTag}>Wireframing</span>
              <span className={styles.projectCardTag}>Prototyping</span>
              <span className={styles.projectCardTag}>Development</span>
            </div>
            <div className={styles.projectCardCtaContainer}>
              <Button>mehr erfahren</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={5}>
          <div className={styles.projectCard}>
            <div className={styles.projectCardImageCon}>
              <Image
                src='/img/projects/logo_heavenFlow.png'
                alt='Project Logo HeavenFlow'
                width={160}
                height={160}
                priority
                className={styles.projectCardImage}
              />
            </div>
            <div className={styles.projectCardText}>
              <h3 className={styles.projectCardHeadline}>
                Projektname / Titel
              </h3>
              <p className={styles.projectCardTextContent}>
                Lorem ipsum dolor sit amet consectetur. Quisque proin pretium
                quam porttitor risus amet dis. Amet consequat consectetur orci
                adipiscing. Proin scelerisque integer ut molestie ultricies dis.
              </p>
            </div>
            <div className={styles.projectCardTags}>
              <span className={styles.projectCardTag}>UX Research</span>
              <span className={styles.projectCardTag}>Wireframing</span>
              <span className={styles.projectCardTag}>Prototyping</span>
              <span className={styles.projectCardTag}>Development</span>
            </div>
            <div className={styles.projectCardCtaContainer}>
              <Button>mehr erfahren</Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={styles.projectCardSliderArrows}>
        <button
          onClick={handleNext}
          className={styles.arrowButton}
          disabled={isEnd}
          aria-disabled={isEnd}
        >
          <Image
            src='img/icons/icon_arrow_right.svg'
            width={20}
            height={20}
            alt='Slider Arrow Right'
            className={styles.arrow}
          />
        </button>
      </div>
    </>
  );
}
