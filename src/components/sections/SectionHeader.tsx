import { ReactNode } from "react";
import styles from "./sectionHeader.module.css";
import Image from "next/image";

type imageProps = {
  src: string;
  alt: string;
  title?: string;
  width: number;
  height: number;
};

type Props = {
  image?: imageProps;
  headline: ReactNode;
  text: ReactNode;
};

export default function SectionHeader({ image, headline, text }: Props) {
  return (
    <header className={styles.header}>
      {image && (
        <div className={styles.imageWrapper}>
          {/*TODO: make actual photo */}

          <Image
            src={image.src}
            alt={image.alt}
            title={image?.title}
            width={image.width}
            height={image.height}
            priority
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.wrapper}>
        <h2 className={styles.headline}>{headline}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </header>
  );
}
