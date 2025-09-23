import clsx from "clsx";
import styles from "./stack.module.css";

type Props = {
  children: React.ReactNode;
  gap?: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  direction?: "row" | "column";
  wrap?: boolean;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  className?: string;
};

// A simple stack component to align elements in a row or column with a gap.

export default function Stack({
  children,
  gap = "xl",
  direction = "column",
  wrap = false,
  justifyContent,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        styles.stack,
        styles[direction],
        wrap && styles.wrap,
        justifyContent && styles[`justify-${justifyContent}`],
        styles[`gap-${gap}`],
        className
      )}
    >
      {children}
    </div>
  );
}
