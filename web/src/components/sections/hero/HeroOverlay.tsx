import { RiArrowDownSLine } from "react-icons/ri";
import { ImBlocked } from "react-icons/im";
import styles from "./heroOverLay.module.css";

const iconMap = {
  down: RiArrowDownSLine,
  locked: ImBlocked,
};

type IconName = keyof typeof iconMap;

type Props = {
  text?: string;
  icon: IconName;
};
export default function HeroOverlay({ icon, text }: Props) {
  const Icon = iconMap[icon];

  return (
    <div className={styles.lockOverlay}>
      <div className={styles.lockText}>
        <Icon aria-hidden='true' className={styles.lockIcon} />
        {text && <p>{text}</p>}
      </div>
    </div>
  );
}
