/* eslint-disable @next/next/no-img-element */

import CustomSwiper from "@/components/ui/customSwiper/CustomSwiper";
import styles from "./workingMethod.module.css";
import "@components/ui/customSwiper/swiper.default.css";
import WorkingMethodItem from "./WorkingMethodItem";
import Inner from "@components/utils/Inner";
import useIsMobile from "@hooks/useIsMobile";
import Stack from "@/components/utils/Stack";

export default function SectionWorkingMethod() {
  const isMobile = useIsMobile();

  const items = [
    {
      id: 1,
      icon: "/img/workMethod/icon_analytically.svg",
      title: "Analytisch",
      text: "Ich plane strukturiert, denke in Nutzer-Flows und arbeite gern mit Skizzen & Wireframes.",
    },
    {
      id: 2,
      icon: "/img/workMethod/icon_cooperation.svg",
      title: "Kooperativ",
      text: "Ich bin lösungsorientiert, offen für Feedback und arbeite gern auf Augenhöhe – leise, aber präsent.",
    },
    {
      id: 3,
      icon: "/img/workMethod/icon_usercentric.svg",
      title: "Nutzerzentriert",
      text: "Ich verbinde Barrierefreiheit mit Gestaltungslust – verständlich, zugänglich, individuell.",
    },
    {
      id: 4,
      icon: "/img/workMethod/icon_technically.svg",
      title: "Technisch",
      text: "Ich schreibe modularen, sprechenden Code – lieber einfach & robust als überladen & trendy.",
    },
  ];

  return (
    <section className={styles.workingMethod} id='working-method'>
      <Inner variant='narrow' paddingTop='xxl' paddingBottom='xxl'>
        <Stack gap={{ base: "lg", md: "md", sm: "sm" }}>
          <h2 className={styles.h2}>Arbeitsweise</h2>
          <Inner paddingTop='md' paddingInline={false}>
            {isMobile ? (
              // only render Swiper on < 768 phone devices

              <CustomSwiper
                items={items}
                swiperConfig={{
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 16,
                  breakpoints: {
                    0: { slidesPerView: 1, slidesPerGroup: 1 },
                    680: { slidesPerView: 2, slidesPerGroup: 2 },
                  },
                }}
              />
            ) : (
              // render list on tablet and desktop
              <ul className={styles.workMethodList}>
                {items.map((item) => (
                  <WorkingMethodItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </Inner>
        </Stack>
      </Inner>
    </section>
  );
}
