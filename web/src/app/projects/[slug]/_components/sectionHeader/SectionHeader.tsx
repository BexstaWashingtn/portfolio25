import styles from "./sectionHeader.module.css";
import Image from "next/image";

type Icon = {
  src: string;
  alt: string;
  title?: string;
};

type Props = {
  icon?: Icon;
  headline: string;
};

export default function SectionHeader({ icon, headline }: Props) {
  const ICON_SIZE = 74;

  return (
    <div className={styles.sectionHeader}>
      {icon && (
        <div className={styles.iconWrapper}>
          <Image
            className={styles.icon}
            src={icon.src}
            alt={icon.alt}
            title={icon.title}
            height={ICON_SIZE}
            width={ICON_SIZE}
          />
        </div>
      )}
      <div className={styles.headlineWrapper}>
        <h2 className={styles.headline}>{headline}</h2>
      </div>
    </div>
  );
}
