import Image from "next/image";
import styles from "./hero.module.css";
import { ImBlocked } from "react-icons/im";
import Logo from "@/components/ui/Logo";
import { getPortfolioLogo } from "@/sanity/fetchPortfolio";

export default async function SectionHero() {
  const sanityLogoData = await getPortfolioLogo();

  console.log("sanityLogoData: ", sanityLogoData);

  return (
    <section className={styles.hero} id='hero'>
      <div className={styles.heroInner}>
        <div className={styles.logoImageOverlay}>
          <Logo width={180} height={263} />
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
            <>
              <ImBlocked className={styles.lockIcon} />
              <p>Die Seite ist für unautorisierte Zugriffe gesperrt.</p>
            </>
          </div>
        </div>
      </div>
    </section>
  );
}
