import clsx from "clsx";
import styles from "./inner.module.css";

type Props = {
  children: React.ReactNode;
  variant?: "default" | "narrow" | "wide" | "full" | "swiper";
  paddingTop?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  paddingBottom?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  paddingInline?:
    | boolean
    | { base?: boolean; lg?: boolean; md?: boolean; sm?: boolean };
  className?: string;
};

// padding Vars try to use from Stack Comp Tokens

export default function Inner({
  children,
  variant = "default",
  paddingTop,
  paddingBottom,
  paddingInline = true,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        styles.inner,
        styles[variant],
        paddingTop && styles[`pt-${paddingTop}`],
        paddingBottom && styles[`pb-${paddingBottom}`],
        typeof paddingInline === "boolean"
          ? paddingInline && styles["padding-inline"]
          : [
              (paddingInline.base ?? true) && styles["padding-inline"],
              paddingInline.sm === false && styles["no-inline-sm"],
              paddingInline.md === false && styles["no-inline-md"],
              paddingInline.lg === false && styles["no-inline-lg"],
            ],
        className
      )}
    >
      {children}
    </div>
  );
}
