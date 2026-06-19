/* eslint-disable @next/next/no-img-element */
import { ImageWithType } from "@/types/Image";
import styles from "./workingMethodItem.module.css";

type Props = {
  item: { icon: ImageWithType; headline: string; text: string };
};
export default function WorkingMedhodItem({ item }: Props) {
  return (
    <li className={styles.workMehtodItem}>
      <img
        className={styles.icon}
        src={item.icon.src}
        alt={item.icon.alt}
        title={item.icon.title ?? item.icon.alt}
        width={item.icon.width}
        height={item.icon.height}
      />
      <h4 className={styles.headline}>{item.headline}</h4>
      <p className={styles.text}>{item.text}</p>
    </li>
  );
}
