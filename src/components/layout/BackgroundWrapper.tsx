import styles from "./backgroundWrapper.module.css";
import React from "react";

type ImageProps = {
  src: string;
  size?: string;
  position?: string;
  repeat?: string;
};

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
  image?: ImageProps; // ❗ jetzt optional
  gradient?: GradientProps; // ❗ jetzt optional
  blur?: number;
};

export const BackgroundWrapper = ({
  children,
  gradient,
  image,
  blur = 16,
}: Props) => {
  // 👉 Dynamisches Hintergrundbild (wenn vorhanden)
  const backgroundImageStyle = image
    ? {
        backgroundImage: `url("${image.src}")`,
        backgroundSize: image.size || "cover",
        backgroundPosition: image.position || "center",
        backgroundRepeat: image.repeat || "no-repeat",
      }
    : {};

  // 👉 Dynamischer Gradient (wenn vorhanden)
  const gradientCss =
    gradient && gradient.colorStops.length > 0
      ? `radial-gradient(${gradient.type || "circle"} at ${
          gradient.startX || "50%"
        } ${gradient.startY || "50%"}, ${gradient.colorStops
          .map(({ color, position }) => `${color} ${position}`)
          .join(", ")})`
      : undefined;

  return (
    <div className={styles.backgroundImageWrapper} style={backgroundImageStyle}>
      <div
        className={styles.backgroundGradientWrapper}
        style={{
          ...(gradientCss ? { background: gradientCss } : {}),
          ...(blur !== undefined
            ? {
                WebkitBackdropFilter: `blur(${blur}px)`,
                backdropFilter: `blur(${blur}px)`,
              }
            : {}),
        }}
      >
        {children}
      </div>
    </div>
  );
};
