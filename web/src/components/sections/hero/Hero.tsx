import Image from "next/image";
import styles from "./hero.module.css";
import Logo from "../../ui/Logo";
import { HeroSection } from "@/types/StartpageData";
import StyledHeadline from "@/components/ui/StyledHeadline/StyledHeadline";

type Props = {
  children: React.ReactNode;
  data: HeroSection;
};

// TODO: optinion to colored section headlines

export default function SectionHero({ children, data }: Props) {
  const settings = data?.settings;
  const bgImage = settings?.backgroundImage ?? null;
  const header = data?.header ?? null;
  const logo = header?.image ?? null;
  const headline = header?.headline ?? null;

  console.log("SectionHero data: ", data);

  return (
    <section className={styles.hero} id={settings.id}>
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
        {bgImage && (
          <div className={styles.heroImageCon}>
            <Image
              src={bgImage.src}
              alt={bgImage.alt}
              width={bgImage.width}
              height={bgImage.height}
              title={bgImage.title}
              priority
              className={styles.heroImage}
              aria-hidden='true'
            />
          </div>
        )}
        {headline && (
          <div className={styles.heroTextOverlay}>
            <div className={styles.heroTextInner}>
              <h1 className={styles.heroHeadline}>
                <StyledHeadline
                  text={headline}
                  accentClassName={"highlight-peach"}
                />
              </h1>
            </div>
          </div>
        )}
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
