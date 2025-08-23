import Button from "../ui/Button";
import Inner from "../utils/Inner";
import Stack from "../utils/Stack";
import Image from "next/image";
import styles from "./music.module.css";

export default function SectionMusic() {
  return (
    <section className={styles.music} id='music'>
      <div className={styles.musicBackground}>
        <Inner variant='narrow' paddingTop='xxl' paddingBottom='xxl'>
          <Stack gap='lg'>
            <header className={styles.musicHeader}>
              <div className={styles.musicHeaderImageCon}>
                <Image
                  src='/img/music/header.jpg'
                  alt='Foto einer Klaviatur'
                  title='Foto einer Klaviatur'
                  width={286}
                  height={382}
                  priority
                  className={styles.musicHeaderImage}
                />
              </div>
              <div className={styles.musicHeaderText}>
                <h2 className={styles.musicHeadline}>
                  Ich & <span className='highlight-peach'>Musik</span>
                </h2>
                <p className={styles.musicText}>
                  Lorem ipsum dolor sit amet consectetur. Aliquam porttitor
                  vitae morbi faucibus venenatis in tristique. Dictumst pharetra
                  adipiscing nibh at aliquet elementum risus dignissim. Nibh
                  aliquam pharetra tristique sagittis.
                </p>
                <div className={styles.musicHeaderButtonCon}>
                  <Button>mehr erfahren</Button>
                </div>
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
                    Instrumente
                  </h3>
                  <p className={styles.musicFooterListItemText}>
                    Überblick der verwendeten Musikinstrumente.
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
  );
}
