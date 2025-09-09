/* eslint-disable @next/next/no-img-element */
import Inner from "@/components/utils/Inner";
import styles from "./skills.module.css";
import Stack from "@/components/utils/Stack";
import skillDatas from "./data.json";
import SkillsList from "./SkillsList";
import { BackgroundImageWrapper } from "@/components/layout/BackgroundImageWrapper";
import { BackgroundGradientWrapper } from "@/components/layout/BackgroundGradientWrapper";

export default function Skills() {
  return (
    <BackgroundImageWrapper
      image={{
        src: "/img/skills/background.jpg",
        title: "Skills Background Image",
        alt: "jemand arbeitet Nachts unter dem Schein der Tischlampen am Schreibtisch",
        width: 550,
      }}
      blur={0}
    >
      <BackgroundGradientWrapper
        gradient={{
          type: "circle",
          startX: "20%",
          startY: "0%",
          colorStops: [
            {
              color: "rgba(70, 45, 37, 0.8)",
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
        blur={64}
      >
        <section id='skills' className={styles.skills}>
          <Inner paddingBottom='xl' paddingTop='xl' variant='narrow'>
            <Stack direction='column' gap='xl'>
              <header className={styles.header}>
                <Stack direction='row' gap='lg'>
                  <img
                    src='/img/skills/icon_skills.svg'
                    alt='ein Kreis aufgeschnitten mit unterschiedlich großen Stücken'
                    title='Symbol für Fähigkeiten und Kenntnisse'
                    className={styles.headerIcon}
                  />

                  <div className={styles.contentWrapper}>
                    <h2 className={styles.headerHeadline}>Skills</h2>
                    <p className={styles.headerText}>
                      Die Fähigkeiten basieren auf Erfahrungen aus realen
                      Projekten – gesammelt seit meiner Ausbildung,
                      weiterentwickelt im Berufsalltag und vertieft durch
                      gezielte Weiterbildung.
                    </p>
                  </div>
                </Stack>
              </header>
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
