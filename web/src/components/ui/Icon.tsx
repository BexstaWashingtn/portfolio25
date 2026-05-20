import type { IconType } from "react-icons";
import {
  MdArrowBack,
  MdArrowDownward,
  MdArrowForward,
  MdArrowUpward,
  MdClose,
} from "react-icons/md";

type Variant = "back" | "forward" | "up" | "down" | "close";

type Props = {
  name: Variant;
  className?: string;
};

const icons = {
  forward: MdArrowForward,
  back: MdArrowBack,
  up: MdArrowUpward,
  down: MdArrowDownward,
  close: MdClose,
} satisfies Record<Variant, IconType>;

export default function Icon({ name, className }: Props) {
  const SelectedIcon = icons[name];

  return (
    <span className={className} aria-hidden='true'>
      <SelectedIcon />
    </span>
  );
}
