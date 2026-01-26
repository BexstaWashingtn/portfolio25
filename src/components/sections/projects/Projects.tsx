import Inner from "../../utils/Inner";
import Stack from "../../utils/Stack";
import styles from "./projects.module.css";
import SectionHeader from "../SectionHeader";
import { BackgroundImageWrapper } from "../../layout/BackgroundImageWrapper";
import { BackgroundGradientWrapper } from "../../layout/BackgroundGradientWrapper";
import CustomSwiper from "@/components/ui/customSwiper/CustomSwiper";
import projectData from "./data.json";
import ProjectCard from "./ProjectCard";
import useIsMobile from "@/lib/hooks/useIsMobile";

export default function SectionProjects() {
  const isDesktop = !useIsMobile({ breakpoint: 848 });
  const showNavigationSwiper = isDesktop;

  return (
    <section className={styles.projects} id='projects'>
      <BackgroundImageWrapper
        image={{
          src: "/img/projects/background.jpg",
          alt: "CoWorking Place Außenansicht bei Nacht",
          style: { opacity: 0.6 },
        }}
        blur={16}
      >
        <BackgroundGradientWrapper
          gradient={{
            type: "circle",
            startX: "50%",
            startY: "-25%",
            colorStops: [
              {
                color: "rgba(0, 20, 45, 0.8)",
                position: "0%",
              },

              {
                color: "rgba(0, 0, 0, 0.8)",
                position: "67%",
              },
            ],
          }}
        >
          <Stack>
            <Inner variant='narrow' paddingTop='xxl'>
              <SectionHeader
                headline={"Projekte"}
                text={
                  "Die Projekte entstanden im Rahmen meiner Weiterbildung 2024/25 oder eigenständig – mit Fokus auf UX, Barrierefreiheit und moderner Frontend-Entwicklung."
                }
              />
            </Inner>
            <Inner variant='swiper' paddingBottom='xxl'>
              <CustomSwiper
                items={projectData}
                renderItem={(item) => <ProjectCard key={item.id} item={item} />}
                swiperConfig={{
                  slidesPerView: 1.2,
                  spaceBetween: 32,
                  breakpoints: {
                    848: { slidesPerView: 2, spaceBetween: 64 },
                  },
                }}
                showNavigation={showNavigationSwiper}
              />
            </Inner>
          </Stack>
        </BackgroundGradientWrapper>
      </BackgroundImageWrapper>
    </section>
  );
}
