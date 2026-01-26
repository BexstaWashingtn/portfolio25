import Stack from "@/components/utils/Stack";
import styles from "./carouselNavButton.module.css";
import ArrowIcon from "../ArrowIcon";
import type { Ref } from "react";

type Props = {
  buttonRef?: Ref<HTMLButtonElement>;
  direction: "left" | "right";
  label: string;
};
export default function CarouselNavButton({
  buttonRef,
  direction,
  label,
}: Props) {
  return (
    <div className={styles.CarouselNavButton}>
      <Stack direction='column' justifyContent='center'>
        <button
          type='button'
          ref={buttonRef}
          className={styles.navButton}
          aria-label={label}
        >
          <ArrowIcon direction={direction} />
        </button>
      </Stack>
    </div>
  );
}
