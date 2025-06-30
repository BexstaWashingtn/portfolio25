/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Button from "@/components/Button";
import Inner from "@/components/Inner";
import Stack from "@/components/Stack";
import ProjectsCardSlider from "@/components/ProjectsCardSlider";
import {
  FaFacebook,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
  FaXing,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { SrOnly } from "@/components/a11y";
import SectionHeader from "@/components/sections/SectionHeader";
import SectionHero from "@/components/sections/SectionHero";

export default function Home() {
  return (
    <>
      <SectionHeader />
      <SectionHero />

      <main className={styles.main}>
        <section className={styles.about}>
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
                    Fullstack-Entwickler mit Fokus auf sauberen Code und
                    nutzerzentrierte Lösungen. Frontend und Backend aus einer
                    Hand – durchdacht, wartbar, effizient. Erfahrung in
                    Webdesign, UX und responsiven Anwendungen. Verbindet
                    technisches Know-how mit gestalterischem Verständnis.
                  </p>
                  <Button>weiter lesen</Button>
                </div>
              </header>
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
                            consectetur. Posuere amet sagittis massa vitae
                            faucibus nibh neque. sagittis massa vitae faucibus
                            nibh neque.
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
                          <p className={styles.timeLineTextHeadline}>
                            Muster GmbH
                          </p>
                          <p className={styles.timeLineTextContent}>
                            consectetur. Posuere amet sagittis massa vitae
                            faucibus nibh neque. sagittis massa vitae faucibus
                            nibh neque.
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
                            consectetur. Posuere amet sagittis massa vitae
                            faucibus nibh neque. sagittis massa vitae faucibus
                            nibh neque.
                          </p>
                        </div>

                        <Button>mehr erfahren</Button>
                      </div>
                    </li>
                  </ul>
                </div>
              </main>
            </Stack>
          </Inner>
        </section>

        <section className={styles.projects}>
          <div className={styles.projectsBackground}>
            <Inner variant='narrow' paddingTop='xxl'>
              <Stack gap='lg'>
                <header className={styles.projectsHeader}>
                  <h2 className={styles.projectsHeadline}>Projekte</h2>
                  <p className={styles.projectsText}>
                    Lorem ipsum dolor sit amet consectetur. Aliquam porttitor
                    vitae morbi faucibus venenatis in tristique. Dictumst
                    pharetra adipiscing nibh at aliquet elementum risus
                    dignissim. Nibh aliquam pharetra tristique sagittis. Lorem
                    ipsum dolor sit amet consectetur. Aliquam porttitor vitae
                    morbi faucibus venenatis in tristique.
                  </p>
                </header>
              </Stack>
            </Inner>
            <main className={styles.projectsMain}>
              <Inner variant='swiper' paddingTop='lg' paddingBottom='xxl'>
                <Stack gap='sm' direction='row'>
                  <ProjectsCardSlider />
                </Stack>
              </Inner>
            </main>
          </div>
        </section>

        <section className={styles.music}>
          <div className={styles.musicBackground}>
            <Inner variant='narrow' paddingTop='xxl' paddingBottom='xxl'>
              <Stack gap='lg'>
                <header className={styles.musicHeader}>
                  <div className={styles.musicHeaderText}>
                    <h2 className={styles.musicHeadline}>
                      Musik <span className='highlight-peach'>Projekte</span>
                    </h2>
                    <p className={styles.musicText}>
                      Lorem ipsum dolor sit amet consectetur. Aliquam porttitor
                      vitae morbi faucibus venenatis in tristique. Dictumst
                      pharetra adipiscing nibh at aliquet elementum risus
                      dignissim. Nibh aliquam pharetra tristique sagittis.
                    </p>
                    <div className={styles.musicHeaderButtonCon}>
                      <Button>mehr erfahren</Button>
                    </div>
                  </div>
                  <div className={styles.musicHeaderImageCon}>
                    <Image
                      src='/img/music_header_image.jpg'
                      alt='Foto einer Klaviertastatur'
                      width={286}
                      height={382}
                      priority
                      className={styles.musicHeaderImage}
                    />
                  </div>
                </header>
                <main className={styles.musicMain}>
                  <div className={styles.musicMainText}>
                    <h3 className={styles.musicMainHeadline}>
                      Musik ist mein Raum ohne Grenzen!
                    </h3>
                    <p className={styles.musicMainTextContent}>
                      Musik entsteht dort, wo Regeln hinterfragt und Formen
                      gebrochen werden.
                    </p>
                  </div>
                  <div className={styles.musicMainPlayer}>
                    <Image
                      src='/img/audio_player.svg'
                      alt='Music Player Example'
                      width={360}
                      height={118}
                      priority
                      className={styles.musicPlayerImage}
                    />
                  </div>
                </main>
                <footer className={styles.musicFooter}>
                  <ul className={styles.musicFooterList}>
                    <li className={styles.musicFooterListItem}>
                      <div className={styles.musicFooterListItemImgCon}>
                        <Image
                          src={"/img/icons/icon_music_equipment.png"}
                          alt='Music Equipment Icon'
                          width={80}
                          height={80}
                        />
                      </div>
                      <h3 className={styles.musicFooterListItemHeadline}>
                        Equipment
                      </h3>
                      <p className={styles.musicFooterListItemText}>
                        Ausgewählte Hardware und Setups im Studioeinsatz.
                      </p>
                      <div className={styles.musicFooterListItemButtonCon}>
                        <Button>mehr erfahren</Button>
                      </div>
                    </li>
                    <li className={styles.musicFooterListItem}>
                      <div className={styles.musicFooterListItemImgCon}>
                        <Image
                          src={"/img/icons/icon_music_instruments.png"}
                          alt='Music Intstruments Icon'
                          width={74}
                          height={80}
                        />
                      </div>
                      <h3 className={styles.musicFooterListItemHeadline}>
                        Intsurmente
                      </h3>
                      <p className={styles.musicFooterListItemText}>
                        Überblick der analogen Musikinstrumente.
                      </p>
                      <div className={styles.musicFooterListItemButtonCon}>
                        <Button>mehr erfahren</Button>
                      </div>
                    </li>
                    <li className={styles.musicFooterListItem}>
                      <div className={styles.musicFooterListItemImgCon}>
                        <Image
                          src={"/img/icons/icon_music_playlist.png"}
                          alt='Music Playlist Icon'
                          width={130}
                          height={80}
                        />
                      </div>
                      <h3 className={styles.musicFooterListItemHeadline}>
                        Playlist
                      </h3>
                      <p className={styles.musicFooterListItemText}>
                        Auswahl an Musikstücken aus den letzten Jahren.
                      </p>
                      <div className={styles.musicFooterListItemButtonCon}>
                        <Button>mehr erfahren</Button>
                      </div>
                    </li>
                  </ul>
                </footer>
              </Stack>
            </Inner>
          </div>
        </section>

        <section className={styles.contact}>
          <div className={styles.contactBackground}>
            <Inner variant='narrow' paddingTop='xxl' paddingBottom='xxl'>
              <Stack gap='lg'>
                <header className={styles.contactHeader}>
                  <h2 className={styles.contactHeadline}>Kontakt</h2>
                  <p className={styles.contactText}>
                    Lust auf ein gemeinsames Projekt, eine Rückmeldung oder
                    einfach ein Austausch? Hier ist Raum für Ideen, Anfragen und
                    erste Impulse. Jede Nachricht wird gelesen und beantwortet.
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
                      <p className={styles.contactMainTextContact}>
                        Socialmedia:
                      </p>
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
                            <RiInstagramFill />{" "}
                            <SrOnly>Instagram Profil</SrOnly>
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
                          <label
                            htmlFor='name'
                            className={styles.contactFormLabel}
                          >
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
                          Daten werden ausschließlich zur Bearbeitung deiner
                          Anfrage verwendet. Weitere Informationen findest du in
                          der <Link href='/'>Datenschutzerklärung</Link>.
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
      </main>
      <footer className={styles.footer}>
        <Inner variant='full' paddingTop='sm' paddingBottom='sm'>
          <div className={styles.footerText}>
            <p className={styles.footerTextCopyright}>
              © 2025 Thomas Badrow. Alle Rechte vorbehalten.
            </p>

            <nav
              className={styles.footerTextNavigation}
              aria-label='Footernavigation'
            >
              <Link href='/' className={styles.footerTextContentLink}>
                Impressum
              </Link>
              <Link href='/' className={styles.footerTextContentLink}>
                Datenschutz
              </Link>
            </nav>
          </div>
        </Inner>
      </footer>
    </>
  );
}
