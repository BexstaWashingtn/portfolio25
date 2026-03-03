import { BackgroundGradientWrapper } from "@/components/layout/BackgroundGradientWrapper";
import { BackgroundImageWrapper } from "@/components/layout/BackgroundImageWrapper";
import Inner from "@/components/utils/Inner";

export default function SectionDetails() {
  return (
    <section id='project-details'>
      <BackgroundImageWrapper
        image={{
          src: "/img/background/particel-waves_mono_1920x1280.jpg",
          alt: "Neurologische Strukturen mit Knotenpunkten",
          title: "Neurologische Strukturen mit Knotenpunkten",
          style: { opacity: 0.5 },
        }}
      >
        <BackgroundGradientWrapper
          gradient={{
            type: "linear",
            colorStops: [
              {
                color: "rgba(248, 141, 127, 0.75)",
                position: "0%",
              },
              {
                color: "rgba(0,0,0, 1)",
                position: "100%",
              },
            ],
          }}
        >
          <Inner paddingBottom='xxl' paddingTop='xxl' variant='narrow'>
            <h1>Test</h1>
          </Inner>
        </BackgroundGradientWrapper>
      </BackgroundImageWrapper>
    </section>
  );
}
