import Inner from "@/components/utils/Inner";
import styles from "./skills.module.css";
import Stack from "@/components/utils/Stack";
import SkillsList from "./SkillsList";
import { BackgroundImageWrapper } from "@/components/layout/BackgroundImageWrapper";
import { BackgroundGradientWrapper } from "@/components/layout/BackgroundGradientWrapper";
import SectionHeader from "../Header";
import SkillsLegend from "./SkillsLegend";
import { SkillsSection } from "@/types/StartpageData";

// TODO: responsivable implementation

type Props = {
  data: SkillsSection;
};

export default function SectionSkills({ data }: Props) {
  const sectionContent = (
    <section id={data.settings.id} className={styles.skills}>
      <Inner paddingBottom='xxl' paddingTop='xxl' variant='narrow'>
        <Stack direction='column' gap={{ base: "xl", md: "lg" }}>
          <SectionHeader
            image={data.header.image ?? undefined}
            headline={data.header.headline}
            text={data.header.text}
          />

          <div className={styles.main}>
            <SkillsList data={data.content} />
            <SkillsLegend />
          </div>
        </Stack>
      </Inner>
    </section>
  );

  return (
    <BackgroundImageWrapper
      image={{
        src: "/img/skills/background.jpg",
        title: "Skills Background Image",
        alt: "jemand arbeitet Nachts unter dem Schein der Tischlampen am Schreibtisch",
        style: { opacity: 0.5 },
      }}
      blur={64}
    >
      <BackgroundGradientWrapper
        gradient={{
          type: "radial",
          shape: "circle",
          startX: "20%",
          startY: "0%",
          colorStops: [
            {
              color: "rgba(75, 47, 38, 0.8)",
              position: "0%",
            },

            {
              color: "rgba(17, 17, 17, 0.8)",
              position: "67%",
            },
            {
              color: "rgba(0, 20, 45, 0.8)",
              position: "100%",
            },
          ],
        }}
      >
        {sectionContent}
      </BackgroundGradientWrapper>
    </BackgroundImageWrapper>
  );
}
