import styles from "./backgroundGradientWrapper.module.css";
import React from "react";

type Percentage = `${number}%`;

type GradientColorStop = {
  color: string;
  position: Percentage;
};

type AtLeastTwo<T> = readonly [T, T, ...T[]];

type GradientProps = {
  type?: "circle" | "ellipse";
  startX?: string;
  startY?: string;
  colorStops: AtLeastTwo<GradientColorStop>;
};

type Props = {
  children: React.ReactNode;
  gradient: GradientProps;
};

export const BackgroundGradientWrapper = ({ children, gradient }: Props) => {
  const {
    type = "circle",
    startX = "50%",
    startY = "50%",
    colorStops,
  } = gradient;

  const gradientCss = `radial-gradient(${type} at ${startX} ${startY}, ${colorStops
    .map(({ color, position }) => `${color} ${position}`)
    .join(", ")})`;

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
