/* eslint-disable @next/next/no-img-element */
import Inner from "@/components/utils/Inner";
import styles from "./skills.module.css";
import Stack from "@/components/utils/Stack";
import skillDatas from "./data.json";
import SkillsList from "./SkillsList";
import { BackgroundImageWrapper } from "@/components/layout/BackgroundImageWrapper";
import { BackgroundGradientWrapper } from "@/components/layout/BackgroundGradientWrapper";
import SectionHeader from "../SectionHeader";

export default function Skills() {
  return (
    <BackgroundImageWrapper
      image={{
        src: "/img/skills/background.jpg",
        title: "Skills Background Image",
        alt: "jemand arbeitet Nachts unter dem Schein der Tischlampen am Schreibtisch",
      }}
      blur={64}
    >
      <BackgroundGradientWrapper
        gradient={{
          type: "circle",
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
        <section id='skills' className={styles.skills}>
          <Inner paddingBottom='xl' paddingTop='xl' variant='narrow'>
            <Stack direction='column' gap='xl'>
              <SectionHeader
                image={{
                  src: "/img/skills/icon_skills.svg",
                  alt: "Symbol für Fähigkeiten und Kenntnisse",
                  width: 180,
                  height: 224,
                }}
                headline={"Skills"}
                text={`Die Fähigkeiten basieren auf Erfahrungen aus realen
                      Projekten – gesammelt seit meiner Ausbildung,
                      weiterentwickelt im Berufsalltag und vertieft durch
                      gezielte Weiterbildung.`}
              />

              <div className={styles.main}>
                <SkillsList datas={skillDatas} />
              </div>
            </Stack>
          </Inner>
        </section>
      </BackgroundGradientWrapper>
    </BackgroundImageWrapper>
  );
}
