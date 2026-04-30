import Image from "next/image";
import styles from "./hero.module.css";
import { RiArrowDownSLine } from "react-icons/ri";
import Logo from "../ui/Logo";

export default function SectionHero() {
  return (
    <section className={styles.hero} id='hero'>
      <div className={styles.heroInner}>
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
            <button className={styles.buttonStart} aria-label='Start Website'>
              <RiArrowDownSLine className={styles.lockIcon} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
