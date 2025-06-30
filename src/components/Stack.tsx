import clsx from "clsx";
import styles from "./stack.module.css";

type Props = {
  children: React.ReactNode;
  gap?: "sm" | "md" | "lg" | "xl" | "xxl";
  direction?: "row" | "column";
  wrap?: boolean;
  className?: string;
};

export default function Stack({
  children,
  gap = "xl",
  direction = "column",
  wrap = false,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        styles.stack,
        styles[direction],
        wrap && styles.wrap,
        styles[`gap-${gap}`],
        className
      )}
    >
      {children}
    </div>
  );
}
