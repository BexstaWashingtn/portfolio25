import Link from "next/link";
import Button from "../ui/Button";
import Inner from "../utils/Inner";
import Stack from "../utils/Stack";
import { SrOnly } from "../utils/a11y";
import {
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
  FaXing,
} from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import styles from "./contact.module.css";
import { BackgroundImageWrapper } from "../layout/BackgroundImageWrapper";
import { BackgroundGradientWrapper } from "../layout/BackgroundGradientWrapper";
import SectionHeader from "./SectionHeader";

// TODO: Form sendable machen
// TODO: add CSS boxshadow

export default function SectionContact() {
  return (
    <section className={styles.contact} id='contact'>
      <BackgroundImageWrapper
        blur={8}
        image={{
          src: "/img/contact/background.jpg",
          alt: "Hintergundbild für den Kontaktbereich - ein leerer Flur",
          style: { opacity: 0.6 },
        }}
      >
        <BackgroundGradientWrapper
          gradient={{
            type: "circle",
            startX: "25%",
            startY: "0",
            colorStops: [
              {
                color: "rgba(113, 21, 33, 0.8)",
                position: "0%",
              },

              {
                color: "rgba(0, 0, 0, 0.8)",
                position: "100%",
              },
            ],
          }}
        >
          <Inner variant='narrow' paddingTop='xxl' paddingBottom='xxl'>
            <Stack gap='xl' className='align-center'>
              <SectionHeader
                headline='Kontakt'
                text='Lust auf ein gemeinsames Projekt, eine Rückmeldung oder
                  einfach ein Austausch? Hier ist Raum für Ideen, Anfragen und
                  erste Impulse. Jede Nachricht wird gelesen und beantwortet.'
              />

              <div className={styles.bodyWrapper}>
                <ul className={styles.contactDataWrapper}>
                  <li className={styles.adress}>
                    Thomas Badrow
                    <br />
                    Musterstraße XY
                    <br />
                    12345 Berlin
                  </li>
                  <li className={styles.contactDataGroup}>
                    <p className={styles.contactDataGroupItem}>
                      <FaWhatsapp />
                      <a href='tel:+49 123 456789'>+49 123 456789</a>
                    </p>
                    <p className={styles.contactDataGroupItem}>
                      <FaTelegramPlane />
                      <a href='mailto:muster.mann@email.com'>
                        muster.mann@email.com
                      </a>
                    </p>
                  </li>

                  <div className={styles.contactDataGroup}>
                    <p className={styles.contactDataGroupLabel}>Socialmedia:</p>
                    <ul className={styles.contactDataGroupIcons}>
                      <li>
                        <Link href='/'>
                          <FaXing /> <SrOnly>Xing Profil</SrOnly>
                        </Link>
                      </li>
                      <li>
                        <Link href='/'>
                          <FaLinkedinIn /> <SrOnly>LinkedIn Profil</SrOnly>
                        </Link>
                      </li>
                      <li>
                        <Link href='/'>
                          <RiInstagramFill /> <SrOnly>Instagram Profil</SrOnly>
                        </Link>
                      </li>
                      <li>
                        <Link href='/'>
                          <FaXTwitter /> <SrOnly>X (Twitter) Profil</SrOnly>
                        </Link>
                      </li>
                      <li>
                        <Link href='/'>
                          <FaFacebook /> <SrOnly>Facebook Profil</SrOnly>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </ul>
                <div className={styles.form}>
                  <form action='' aria-describedby='privacy-note'>
                    <div className={styles.wrapper}>
                      <SrOnly>
                        <legend>Kontaktformular</legend>
                      </SrOnly>

                      <div className={styles.field}>
                        <label htmlFor='name' className={styles.label}>
                          Vor- und Zuname
                        </label>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          placeholder='Name'
                          required
                          className={styles.input}
                        />
                      </div>

                      <div className={styles.field}>
                        <label htmlFor='email' className={styles.label}>
                          E-Mail
                        </label>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          placeholder='E-Mail'
                          required
                          className={styles.input}
                        />
                      </div>

                      <div className={styles.field}>
                        <label htmlFor='message' className={styles.label}>
                          Deine Nachricht
                        </label>
                        <textarea
                          id='message'
                          name='message'
                          placeholder='Nachricht'
                          rows={8}
                          required
                          className={styles.textarea}
                        ></textarea>
                      </div>

                      <p id='privacy-note' className={styles.privacyNote}>
                        Hinweis zum Datenschutz: Die im Formular eingegebenen
                        Daten werden ausschließlich zur Bearbeitung deiner
                        Anfrage verwendet. Weitere Informationen findest du in
                        der <Link href='/'>Datenschutzerklärung</Link>.
                      </p>

                      <div className={styles.actions}>
                        <Button type='submit'>Absenden</Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Stack>
          </Inner>
        </BackgroundGradientWrapper>
      </BackgroundImageWrapper>
    </section>
  );
}
