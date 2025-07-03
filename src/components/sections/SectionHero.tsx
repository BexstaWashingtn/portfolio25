import Image from "next/image";
import styles from "./sectionHero.module.css";

export default function SectionHero() {
  return (
    <section className={styles.hero} id='hero'>
      <div className={styles.heroInner}>
        <div className={styles.heroImageCon}>
          <Image
            src='/img/background/particel-waves_mono_1440x465.jpg'
            alt='Heroe Image - Particel Waves'
            width={1440}
            height={436}
            priority
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroText}>
          <h1 className={styles.heroHeadline}>
            „<span className='highlight-peach-300'>Code</span> ist mein{" "}
            <span className='highlight-peach-300'>Werkzeug</span>
            ,<br />
            <span className='highlight-peach-300'>Gestaltung</span> meine{" "}
            <span className='highlight-peach-300'>Sprache</span>
            .“
          </h1>
        </div>
      </div>
    </section>
  );
}
