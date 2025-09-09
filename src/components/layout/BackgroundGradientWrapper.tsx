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
};

export const BackgroundGradientWrapper = ({ children, gradient }: Props) => {
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
      }}
    >
      {children}
    </div>
  );
};
