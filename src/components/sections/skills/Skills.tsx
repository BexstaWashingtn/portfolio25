/* eslint-disable @next/next/no-img-element */
import Inner from "@/components/utils/Inner";
import styles from "./skills.module.css";
import Stack from "@/components/utils/Stack";
import skillDatas from "./data.json";
import SkillsList from "./SkillsList";

export default function Skills() {
  return (
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
                  Die Fähigkeiten basieren auf Erfahrungen aus realen Projekten
                  – gesammelt seit meiner Ausbildung, weiterentwickelt im
                  Berufsalltag und vertieft durch gezielte Weiterbildung.
                </p>
              </div>
            </Stack>
          </header>
          <main className={styles.main}>
            <SkillsList datas={skillDatas} />
          </main>
        </Stack>
      </Inner>
    </section>
  );
}
