import Button from "../Button";
import Inner from "../Inner";
import Stack from "../Stack";
import styles from "./SectionAboutme.module.css";

import Image from "next/image";

export default function SectionAboutme({}) {
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
                {/*Fullstack-Entwickler mit Fokus auf sauberen Code und
                nutzerzentrierte Lösungen. Frontend und Backend aus einer Hand –
                durchdacht, wartbar, effizient. Erfahrung in Webdesign, UX und
                responsiven Anwendungen. Verbindet technisches Know-how mit
                gestalterischem Verständnis.*/}
                Hi, ich bin Thomas, 43 Jahre alt aus Brandenburg. Schon früh
                entdeckte ich meine Leidenschaft für Gestaltung – vom Zeichnen
                über Graffiti bis hin zur digitalen Medienwelt. Seit meiner
                Ausbildung zum Mediengestalter (2001) entwickle ich digitale
                Produkte – heute vor allem moderne Webanwendungen mit React und
                Next.js. Design trifft bei mir auf Technik – mit Kreativität,
                Neugier und einem Sinn für saubere Umsetzung.
              </p>
              <Button>weiter lesen</Button>
            </div>
          </header>
          {/*
          <main className={styles.aboutMain}>
            <div className={styles.aboutMainInner}>
              <ul className={styles.aboutList}>
                <li className={styles.aboutListItem}>
                  <div className={styles.timeLine}>
                    <div className={styles.timeLineContainer}>
                      <div className={styles.timeLineDot}></div>
                      <div className={styles.timeLineLineFirst}></div>
                    </div>
                    <div className={styles.timeLineLineYear}>2025</div>
                  </div>
                  <div className={styles.timeLineText}>
                    <h3 className={styles.timeLineTextHeadline}>
                      UX / Fullstack Development [next.js]
                    </h3>
                    <div className={styles.timeLineTextContainer}>
                      <p className={styles.timeLineTextHeadline}>
                        Student | Cimdata Akademie Berlin
                      </p>
                      <p className={styles.timeLineTextContent}>
                        consectetur. Posuere amet sagittis massa vitae faucibus
                        nibh neque. sagittis massa vitae faucibus nibh neque.
                      </p>
                    </div>
                  </div>
                </li>
                <li className={styles.aboutListItem}>
                  <div className={styles.timeLine}>
                    <div className={styles.timeLineContainer}>
                      <div className={styles.timeLineDot}></div>
                      <div className={styles.timeLineLine}></div>
                    </div>
                    <div className={styles.timeLineLineYear}>2021</div>
                  </div>
                  <div className={styles.timeLineText}>
                    <h3 className={styles.timeLineTextHeadline}>
                      Frontend Development
                    </h3>
                    <div className={styles.timeLineTextContainer}>
                      <p className={styles.timeLineTextHeadline}>Muster GmbH</p>
                      <p className={styles.timeLineTextContent}>
                        consectetur. Posuere amet sagittis massa vitae faucibus
                        nibh neque. sagittis massa vitae faucibus nibh neque.
                      </p>
                    </div>
                  </div>
                </li>
                <li className={styles.aboutListItem}>
                  <div className={styles.timeLine}>
                    <div className={styles.timeLineContainer}>
                      <div className={styles.timeLineDot}></div>
                      <div className={styles.timeLineLineLast}></div>
                    </div>
                    <div className={styles.timeLineLineYear}>2012</div>
                  </div>
                  <div className={styles.timeLineText}>
                    <h3 className={styles.timeLineTextHeadline}>
                      Mediengestalter
                    </h3>
                    <div className={styles.timeLineTextContainer}>
                      <p className={styles.timeLineTextHeadline}>
                        XYZ Berlin GmbH
                      </p>
                      <p className={styles.timeLineTextContent}>
                        consectetur. Posuere amet sagittis massa vitae faucibus
                        nibh neque. sagittis massa vitae faucibus nibh neque.
                      </p>
                    </div>

                    <Button>mehr erfahren</Button>
                  </div>
                </li>
              </ul>
            </div>
          </main>
          */}
        </Stack>
      </Inner>
    </section>
  );
}
