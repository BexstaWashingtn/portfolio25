import clsx from "clsx";
import styles from "./inner.module.css";

type Props = {
  children: React.ReactNode;
  variant?: "default" | "narrow" | "wide" | "full" | "swiper";
  paddingTop?: "sm" | "md" | "lg" | "xl" | "xxl";
  paddingBottom?: "sm" | "md" | "lg" | "xl" | "xxl";
  paddingInline?: boolean;
  className?: string;
};

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
