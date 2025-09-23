import clsx from "clsx";
import styles from "./inner.module.css";

type Props = {
  children: React.ReactNode;
  variant?: "default" | "narrow" | "wide" | "full" | "swiper";
  paddingTop?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  paddingBottom?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  paddingInline?: boolean;
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
        paddingInline && styles[`padding-inline`],
        className
      )}
    >
      {children}
    </div>
  );
}
