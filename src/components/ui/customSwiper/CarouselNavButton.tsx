import Stack from "@/components/utils/Stack";
import styles from "./carouselNavButton.module.css";
import ArrowIcon from "../ArrowIcon";
import type { Ref } from "react";
import Button from "../form/Button";

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
        <Button
          type='button'
          ref={buttonRef}
          variant='ghost'
          className={styles.navButton}
          aria-label={label}
        >
          <ArrowIcon direction={direction} />
        </Button>
      </Stack>
    </div>
  );
}
