/* eslint-disable @next/next/no-img-element */
import { Image as ImageData } from "@/types/Image";
import styles from "./projectVisualsFullImage.module.css";

type Props = {
  item: ImageData;
  caption: string | undefined;
};
export default function projectVisualsFullImage({ item, caption }: Props) {
  return (
    <div className={styles.modalImageContainer}>
      <div className={styles.modalImageScrollableContent}>
        <img
          src={item.src}
          alt={item.alt}
          {...(item.title && { title: item.title })}
          className={styles.modalImage}
        />
      </div>

      {caption && <div className={styles.modalImageCaption}>{caption}</div>}
    </div>
  );
}
