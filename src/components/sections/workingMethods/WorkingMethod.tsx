/* eslint-disable @next/next/no-img-element */

import CustomSwiper from "@/components/ui/CustomSwiper";
import styles from "./WorkingMethod.module.css";
import WorkingMethodItem from "./WorkingMethodItem";
import Inner from "@components/utils/Inner";
import useIsMobile from "@hooks/useIsMobile";

export default function WorkingMethod() {
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
      <Inner variant='narrow' paddingTop='xl' paddingBottom='xl'>
        <h2 className={styles.h2}>Arbeitsweise</h2>
        <Inner paddingBottom='xl' paddingTop='md' paddingInline={false}>
          {isMobile ? (
            // only render Swiper on < 768 phone devices

            <CustomSwiper items={items} />
          ) : (
            // render list on tablet and desktop
            <ul className={styles.workMethodList}>
              {items.map((item) => (
                <WorkingMethodItem key={item.id} item={item} />
              ))}
            </ul>
          )}
        </Inner>
      </Inner>
    </section>
  );
}
