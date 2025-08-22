import Inner from "../utils/Inner";
import Stack from "../utils/Stack";
import styles from "./aboutme.module.css";

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
              {/*TODO: make actual photo */}
              <Image
                src='/img/aboutme/tb_smile.png'
                alt='Foto von Thomas mit einem Lächeln'
                title='Foto von Thomas mit einem Lächeln'
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
                Hi, ich bin Thomas, {age} Jahre, aus Brandenburg.
                <br />
                Schon früh entdeckte ich meine Leidenschaft für Gestaltung – vom
                Zeichnen über Graffiti bis hin zur digitalen Medienwelt. Seit
                meiner Ausbildung zum Mediengestalter (2001) entwickle ich
                digitale Produkte – heute vor allem moderne Webanwendungen mit
                React und Next.js.
              </p>
            </div>
          </header>
        </Stack>
      </Inner>
    </section>
  );
}
