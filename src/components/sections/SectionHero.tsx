import Image from "next/image";
import styles from "./sectionHero.module.css";

export default function SectionHero() {
  return (
    <section className={styles.hero} id='hero'>
      <div className={styles.heroInner}>
        <div className={styles.logoImageCon}>
          <Image
            src='/img/logo_beige.svg'
            alt='Logo Thomas Badrow'
            width={200}
            height={200}
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
        <div className={styles.heroText}>
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
    </section>
  );
}
