import Inner from "../Inner";
import Stack from "../Stack";
import styles from "./SectionAboutme.module.css";

import Image from "next/image";

export default function SectionAboutme({}) {
  const birthYear = 1982;
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  return (
    <section className={styles.about} id='about'>
      <Inner variant='narrow' paddingTop='xxl' paddingBottom='xxl'>
        <Stack gap='lg'>
          <header className={styles.aboutHeader}>
            <div className={styles.aboutImageCon}>
              <Image
                src='/img/me_gpt_clean-smile.jpg'
                alt='Foto von Thomas mit einem Lächeln'
                width={286}
                height={382}
                priority
                className={styles.aboutImage}
              />
            </div>
            <div className={styles.aboutContent}>
              <h2 className={styles.aboutHeadline}>
                Über <span className='highlight-peach'>mich</span>
              </h2>
              <p className={styles.aboutText}>
                Hi, ich bin Thomas, {age} Jahre alt aus Brandenburg. Schon früh
                entdeckte ich meine Leidenschaft für Gestaltung – vom Zeichnen
                über Graffiti bis hin zur digitalen Medienwelt. Seit meiner
                Ausbildung zum Mediengestalter (2001) entwickle ich digitale
                Produkte – heute vor allem moderne Webanwendungen mit React und
                Next.js. Design trifft bei mir auf Technik – mit Kreativität,
                Neugier und einem Sinn für saubere Umsetzung.
              </p>
              {/*<Button>weiter lesen</Button>*/}
            </div>
          </header>
        </Stack>
      </Inner>
    </section>
  );
}
