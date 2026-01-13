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
      text: "Plant strukturiert, denkt in Nutzer-Flows und arbeite gern mit Skizzen & Wireframes.",
    },
    {
      id: 2,
      icon: "/img/workMethod/icon_cooperation.svg",
      title: "Kooperativ",
      text: "Lösungsorientiert, offen für Feedback und arbeitet gern auf Augenhöhe – leise, aber präsent.",
    },
    {
      id: 3,
      icon: "/img/workMethod/icon_usercentric.svg",
      title: "Nutzerzentriert",
      text: "Verbindet Barrierefreiheit mit Gestaltungslust – verständlich, zugänglich, individuell.",
    },
    {
      id: 4,
      icon: "/img/workMethod/icon_technically.svg",
      title: "Technisch",
      text: "Schreibt modularen, sprechenden Code – lieber einfach & robust als überladen & trendy.",
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
                renderItem={(item) => (
                  <WorkingMethodItem key={item.id} item={item} />
                )}
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
