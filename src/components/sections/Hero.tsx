import Image from "next/image";
import styles from "./hero.module.css";
import { ImBlocked } from "react-icons/im";
import { RiArrowDownSLine } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../ui/Logo";

export default function SectionHero({
  isLocked,
}: {
  isLocked: boolean; // Indicates if the page is locked for unauthorized access
}) {
  return (
    <section className={styles.hero} id='hero'>
      <div className={`${styles.heroInner} ${!isLocked ? "pointer" : ""}`}>
        <div className={styles.logoImageOverlay}>
          <Logo width={180} height={263} linkDisabled={true} />
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
            <h1
              className={`${styles.heroHeadline} ${!isLocked ? "pointer" : ""}`}
            >
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
              {isLocked && (
                <motion.div
                  key='locked'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <>
                    <ImBlocked className={styles.lockIcon} />
                    <p>Die Seite ist für unautorisierte Zugriffe gesperrt.</p>
                  </>
                </motion.div>
              )}

              {!isLocked && (
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
