/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Inner from "../utils/Inner";
import styles from "./footer.module.css";
import Stack from "../utils/Stack";
import { BackgroundImageWrapper } from "./BackgroundImageWrapper";

export default function Footer() {
  return (
    <BackgroundImageWrapper
      image={{
        src: "/img/footer/background.jpg",
        title: "Balletschuhe im Sprung geschlossen",
        alt: "Balletschuhe im Sprung geschlossen",
      }}
    >
      <footer className={styles.footer}>
        <header className={styles.header}>
          <Inner variant='wide' paddingTop='md' paddingBottom='md'>
            <Stack direction='column' gap='md'>
              <div className={styles.buildLogos}>
                <span className={styles.label}>App is build with:</span>
                <div className={styles.imageWrapper}>
                  <img
                    className={styles.img}
                    src='/img/footer/logo_react.svg'
                    alt='react js Logo'
                  />
                  <img
                    className={styles.img}
                    src='/img/footer/logo_nextjs.svg'
                    alt='next.js Logo'
                  />
                  <img
                    className={styles.img}
                    src='/img/footer/logo_sanity.svg'
                    alt='sanity CMS Logo'
                  />
                  <img
                    className={styles.img}
                    src='/img/footer/logo_vercel.svg'
                    alt='vercel CI/CD'
                  />
                </div>
              </div>

              <div className={styles.messages}>
                <p className={styles.message}>
                  Barrierefrei & semantisch entwickelt
                </p>
                {process.env.NEXT_PUBLIC_BUILT_AT && (
                  <p className={styles.lastbuilt}>
                    last build:{" "}
                    {new Date(process.env.NEXT_PUBLIC_BUILT_AT).toLocaleString(
                      "de-DE"
                    )}
                  </p>
                )}
              </div>
            </Stack>
          </Inner>
        </header>

        <div className={styles.legacyNote}>
          <Inner variant='wide'>
            <div className={styles.inner}>
              <p className={styles.copyright}>
                © 2025 Thomas Badrow. Alle Rechte vorbehalten.
              </p>

              <div>
                <nav
                  className={styles.navigation}
                  aria-label='Footernavigation'
                >
                  <Link href='/' className={styles.navigationLink}>
                    Impressum
                  </Link>
                  <Link href='/' className={styles.navigationLink}>
                    Datenschutz
                  </Link>
                </nav>
              </div>
            </div>
          </Inner>
        </div>
      </footer>
    </BackgroundImageWrapper>
  );
}
