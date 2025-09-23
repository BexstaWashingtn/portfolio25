import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./sectionHeader.module.css";
import Image from "next/image";

type imageProps = {
  src: string;
  alt: string;
  title?: string;
  width: number;
  height: number;
  className?: string;
};

type Props = {
  image?: imageProps;
  headline: ReactNode;
  text: ReactNode;
  className?: string;
};

export default function SectionHeader({
  image,
  headline,
  text,
  className,
}: Props) {
  return (
    <header className={clsx(className, styles.header)}>
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
            className={clsx(className, styles.image)}
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
