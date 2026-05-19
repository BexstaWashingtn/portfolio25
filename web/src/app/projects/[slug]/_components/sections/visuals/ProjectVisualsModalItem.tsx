/* eslint-disable @next/next/no-img-element */
import { Image as ImageData } from "@/types/image";
import styles from "./projectVisualsModalItem.module.css";

type Props = {
  item: ImageData;
  caption: string | undefined;
};
export default function ProjectVisualsModalItem({ item, caption }: Props) {
  return (
    <div className={styles.modalImageContainer}>
      <div className={styles.modalImageScrollablecontainer}>
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
