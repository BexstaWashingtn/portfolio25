import Image from "next/image";
import styles from "./hero.module.css";
import Logo from "../../ui/Logo";
import { HeroSection } from "@/types/StartpageData";
import StyledHeadline from "@/components/ui/StyledHeadline/StyledHeadline";
import clsx from "clsx";

type HeaderLayout = "fullscreen" | "compact";

type Props = {
  children?: React.ReactNode;
  data: HeroSection;
  layout?: HeaderLayout;
};

export default function SectionHero({
  children,
  data,
  layout = "fullscreen",
}: Props) {
  const settings = data?.settings;
  const bgImage = settings?.backgroundImage ?? null;
  const header = data?.header ?? null;
  const logo = header?.image ?? null;
  const headline = header?.headline ?? null;
  const text = header?.text ?? null;

  console.log("SectionHero data: ", data);

  return (
    <section className={styles.hero} id={settings.id}>
      <div
        className={clsx(
          styles.heroInner,
          layout === "fullscreen" ? styles.fullscreen : styles.compact,
        )}
      >
        {logo && (
          <div className={styles.logoImageOverlay}>
            <Logo
              src={logo.src}
              width={logo.width}
              {...(logo.height ? { height: logo.height } : {})}
              alt={logo.alt}
              title={logo.title}
            />
          </div>
        )}
        {bgImage && (
          <div className={styles.backgroundImage}>
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
        {header && (
          <div className={styles.textOverlay}>
            <div className={styles.contentInner}>
              {headline && (
                <h1 className={styles.headline}>
                  <StyledHeadline
                    text={headline}
                    accentClassName={"highlight-peach"}
                  />
                </h1>
              )}
              {text && <span className={styles.subline}>{text}</span>}
            </div>
          </div>
        )}
        {children && (
          <div className={styles.lockOverlay}>
            <div className={styles.lockText}>{children}</div>
          </div>
        )}
      </div>
    </section>
  );
}
