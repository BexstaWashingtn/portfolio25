import Image from "next/image";
import styles from "./hero.module.css";
import Logo from "../../ui/Logo";
import { HeroSection } from "@/types/StartpageData";

type Props = {
  children: React.ReactNode;
  data: HeroSection;
};

export default function SectionHero({ children, data }: Props) {
  const logo = data?.header?.image ? data.header.image : null;

  return (
    <section className={styles.hero} id='hero'>
      <div className={styles.heroInner}>
        <div className={styles.logoImageOverlay}>
          {logo && (
            <Logo
              src={logo.src}
              width={logo.width}
              {...(logo.height ? { height: logo.height } : {})}
              alt={logo.alt}
              title={logo.title}
            />
          )}
        </div>
        <div className={styles.heroImageCon}>
          <Image
            src='/img/background/particel-waves_mono_1920x1280.jpg'
            alt=''
            width={1920}
            height={1280}
            priority
            className={styles.heroImage}
            aria-hidden='true'
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
              {children}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
