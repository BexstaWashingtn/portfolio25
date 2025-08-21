import Image from "next/image";
import styles from "./sectionHero.module.css";
import { ImBlocked, ImSpinner6 } from "react-icons/im";
import { RiArrowDownSLine } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";

export default function SectionHero({
  isCheckingUrlParams,
  pageIsLocked,
}: {
  isCheckingUrlParams?: boolean; // Optional prop to indicate if URL params are being checked
  pageIsLocked: boolean; // Indicates if the page is locked for unauthorized access
}) {
  return (
    <section className={styles.hero} id='hero'>
      <div
        className={`${styles.heroInner} ${!pageIsLocked ? styles.pointer : ""}`}
      >
        <div className={styles.logoImageOverlay}>
          <Image
            src='/img/logo/logo_beige_shadow.png'
            alt='Logo - eine Person sitzt im Fensterrahmen und schaut in dem Himmel'
            title='Logo Thomas Badrow'
            width={180}
            height={263}
            priority
            className={styles.logoImage}
          />
        </div>
        <div className={styles.heroImageCon}>
          <Image
            src='/img/background/particel-waves_mono_1920x1280.jpg'
            alt='Heroe Image - Particel Waves'
            width={1920}
            height={1280}
            priority
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroTextOverlay}>
          <div className={styles.heroTextInner}>
            <h1 className={styles.heroHeadline}>
              „<span className='highlight-peach'>Code</span> ist mein{" "}
              <span className='highlight-peach'>Werkzeug</span>
              ,<br />
              <span className='highlight-peach'>Gestaltung</span> meine{" "}
              <span className='highlight-peach'>Sprache</span>
              .“
            </h1>
          </div>
        </div>

        <div className={styles.lockOverlay}>
          <div className={styles.lockText}>
            <AnimatePresence mode='wait'>
              {isCheckingUrlParams && (
                <motion.div
                  key='spinner'
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.4 }}
                >
                  <ImSpinner6 className={styles.spinner} />
                </motion.div>
              )}

              {!isCheckingUrlParams && pageIsLocked && (
                <motion.div
                  key='locked'
                  initial={{ opacity: 0, y: -10, scale: 0.75 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <>
                    <ImBlocked className={styles.lockIcon} />
                    <p>Die Seite ist für unautorisiert Zufriffe gesperrt.</p>
                  </>
                </motion.div>
              )}

              {!isCheckingUrlParams && !pageIsLocked && (
                <motion.div
                  key='arrow'
                  initial={{ opacity: 0, y: -20, scale: 1 }}
                  animate={{ opacity: 1, y: 0, scale: 1.5 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <RiArrowDownSLine className={styles.lockIcon} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
