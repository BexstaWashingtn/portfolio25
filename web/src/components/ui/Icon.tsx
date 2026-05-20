import { JSX } from "react";
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
export default function Icon({ name, className }: Props) {
  const icons: Record<Variant, JSX.Element> = {
    forward: <MdArrowForward />,
    back: <MdArrowBack />,
    up: <MdArrowUpward />,
    down: <MdArrowDownward />,
    close: <MdClose />,
  } satisfies Record<NonNullable<Props["name"]>, JSX.Element>;

  return (
    <span className={className} aria-hidden='true'>
      {icons[name]}
    </span>
  );
}
