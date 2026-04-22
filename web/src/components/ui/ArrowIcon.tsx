import { JSX } from "react";
import {
  MdArrowBack,
  MdArrowDownward,
  MdArrowForward,
  MdArrowUpward,
} from "react-icons/md";

type Direction = "back" | "forward" | "up" | "down";

type Props = {
  direction: Direction;
  className: string;
};
export default function ArrowIcon({ direction = "back", className }: Props) {
  const icons: Record<Direction, JSX.Element> = {
    forward: <MdArrowForward />,
    back: <MdArrowBack />,
    up: <MdArrowUpward />,
    down: <MdArrowDownward />,
  } satisfies Record<NonNullable<Props["direction"]>, JSX.Element>;

  return (
    <span className={className} aria-hidden='true'>
      {icons[direction]}
    </span>
  );
}
