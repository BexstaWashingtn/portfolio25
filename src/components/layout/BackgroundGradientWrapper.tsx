import styles from "./backgroundGradientWrapper.module.css";
import React from "react";

type GradientColorStop = {
  color: string;
  position: string;
};

type GradientProps = {
  type?: "circle" | "ellipse";
  startX?: string;
  startY?: string;
  colorStops: GradientColorStop[];
};

type Props = {
  children: React.ReactNode;
  gradient?: GradientProps;
  blur?: number;
};

export const BackgroundGradientWrapper = ({
  children,
  gradient,
  blur = 16,
}: Props) => {
  const gradientCss =
    gradient && gradient.colorStops.length > 0
      ? `radial-gradient(${gradient.type || "circle"} at ${
          gradient.startX || "50%"
        } ${gradient.startY || "50%"}, ${gradient.colorStops
          .map(({ color, position }) => `${color} ${position}`)
          .join(", ")})`
      : undefined;

  return (
    <div
      className={styles.backgroundGradientWrapper}
      style={{
        ...(gradientCss ? { background: gradientCss } : {}),
        ...(typeof blur === "number"
          ? {
              WebkitBackdropFilter: `blur(${blur}px)`,
              backdropFilter: `blur(${blur}px)`,
            }
          : {}),
      }}
    >
      {children}
    </div>
  );
};
