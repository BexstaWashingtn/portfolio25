import Link from "next/link";
import Button from "../Button";
import Inner from "../Inner";
import Stack from "../Stack";
import { SrOnly } from "../a11y";
import {
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
  FaXing,
} from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import styles from "./SectionContactForm.module.css";

export default function SectionContactForm() {
  return (
    <section className={styles.contact} id='contact'>
      <div className={styles.contactBackground}>
        <Inner variant='narrow' paddingTop='xxl' paddingBottom='xxl'>
          <Stack gap='lg'>
            <header className={styles.contactHeader}>
              <h2 className={styles.contactHeadline}>Kontakt</h2>
              <p className={styles.contactText}>
                Lust auf ein gemeinsames Projekt, eine Rückmeldung oder einfach
                ein Austausch? Hier ist Raum für Ideen, Anfragen und erste
                Impulse. Jede Nachricht wird gelesen und beantwortet.
              </p>
            </header>
            <main className={styles.contactMain}>
              <div className={styles.contactMainText}>
                <p className={styles.contactMainTextAdress}>
                  Thomas Badrow
                  <br />
                  Musterstraße XY
                  <br />
                  12345 Berlin
                </p>
                <div className={styles.contactMainTextContactGroup}>
                  <p className={styles.contactMainTextContact}>
                    <FaWhatsapp />
                    <a href='tel:+49 123 456789'>+49 123 456789</a>
                  </p>
                  <p className={styles.contactMainTextContact}>
                    <FaTelegramPlane />
                    <a href='mailto:muster.mann@email.com'>
                      muster.mann@email.com
                    </a>
                  </p>
                </div>

                <div className={styles.contactMainTextContactGroup}>
                  <p className={styles.contactMainTextContact}>Socialmedia:</p>
                  <ul className={styles.contactMainTextSMIcons}>
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
              </div>
              <div className={styles.contactMainForm}>
                <form action=''>
                  <fieldset className={styles.contactFormFieldset}>
                    <SrOnly>
                      <legend>Kontaktformular</legend>
                    </SrOnly>

                    <div className={styles.contactFormField}>
                      <label htmlFor='name' className={styles.contactFormLabel}>
                        Vor- und Zuname
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Name'
                        required
                        className={styles.contactFormInput}
                      />
                    </div>

                    <div className={styles.contactFormField}>
                      <label
                        htmlFor='email'
                        className={styles.contactFormLabel}
                      >
                        E-Mail
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='E-Mail'
                        required
                        className={styles.contactFormInput}
                      />
                    </div>

                    <div className={styles.contactFormField}>
                      <label
                        htmlFor='message'
                        className={styles.contactFormLabel}
                      >
                        Deine Nachricht
                      </label>
                      <textarea
                        id='message'
                        name='message'
                        placeholder='Nachricht'
                        rows={8}
                        required
                        className={styles.contactFormTextarea}
                      ></textarea>
                    </div>

                    <p className={styles.contactMainFormText}>
                      Hinweis zum Datenschutz: Die im Formular eingegebenen
                      Daten werden ausschließlich zur Bearbeitung deiner Anfrage
                      verwendet. Weitere Informationen findest du in der{" "}
                      <Link href='/'>Datenschutzerklärung</Link>.
                    </p>

                    <div className={styles.contactMainFormButtonCon}>
                      <Button type='submit'>Absenden</Button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </main>
          </Stack>
        </Inner>
      </div>
    </section>
  );
}
