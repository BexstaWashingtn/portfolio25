import styles from "./arrowIcon.module.css";

type Props = {
  direction: "left" | "right";
};
export default function ArrowIcon({ direction = "left" }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={styles[direction]}
      src={`img/icons/icon_arrow_left_circle.svg`}
      alt=''
    />
  );
}
