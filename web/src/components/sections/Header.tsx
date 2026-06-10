import clsx from "clsx";
import styles from "./header.module.css";
import Image from "next/image";
import type { SectionHeader } from "@/types/StartpageData";
import StyledHeadline from "../ui/StyledHeadline/StyledHeadline";

type Props = SectionHeader & {
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
          <Image
            src={image.src}
            alt={image.alt}
            {...(image?.title ? { title: image.title } : {})}
            width={image.width}
            height={image.height}
            priority
            className={clsx(className, styles.image)}
          />
        </div>
      )}
      <div className={styles.wrapper}>
        {headline && (
          <h2 className={styles.headline}>
            <StyledHeadline
              text={headline}
              accentClassName={"highlight-peach"}
            ></StyledHeadline>
          </h2>
        )}
        <p className={styles.text}>{text}</p>
      </div>
    </header>
  );
}
