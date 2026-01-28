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
            <Inner variant='full' paddingBottom='xxl'>
              <CustomSwiper
                items={projectData}
                renderItem={(item) => <ProjectCard key={item.id} item={item} />}
                swiperConfig={{
                  spaceBetween: 32,
                  breakpoints: {
                    0: { slidesPerView: 1.2 },
                    848: { slidesPerView: 2 },
                    1024: { spaceBetween: 64 },
                    1280: { slidesPerView: 3 },
                    1920: { slidesPerView: 4 },
                    2440: { slidesPerView: 5 },
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
