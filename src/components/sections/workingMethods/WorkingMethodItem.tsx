/* eslint-disable @next/next/no-img-element */
import styles from "./workingMethodItem.module.css";

type Props = {
  item: { icon: string; title: string; text: string };
};
export default function WorkingMedhodItem({ item }: Props) {
  return (
    <li className={styles.workMehtodItem}>
      <img className={styles.icon} src={item.icon} alt='' height={80} />
      <h3 className={styles.headline}>{item.title}</h3>
      <p className={styles.text}>{item.text}</p>
    </li>
  );
}
