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
  image?: ImageProps;
  gradient?: GradientProps;
  blur?: number;
};

export const BackgroundWrapper = ({
  children,
  gradient,
  image,
  blur = 16,
}: Props) => {
  const backgroundImageStyle = image
    ? {
        backgroundImage: `url("${image.src}")`,
        backgroundSize: image.size || "cover",
        backgroundPosition: image.position || "center",
        backgroundRepeat: image.repeat || "no-repeat",
      }
    : {};

  const gradientCss =
    gradient && gradient.colorStops.length > 0
      ? `radial-gradient(${gradient.type || "circle"} at ${
          gradient.startX || "50%"
        } ${gradient.startY || "50%"}, ${gradient.colorStops
          .map(({ color, position }) => `${color} ${position}`)
          .join(", ")})`
      : undefined;

  let content = <>{children}</>;

  if (gradientCss || blur !== undefined) {
    content = (
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
        {content}
      </div>
    );

    if (image) {
      content = (
        <div
          className={styles.backgroundImageWrapper}
          style={backgroundImageStyle}
        >
          {content}
        </div>
      );
    }

    return content;
  }
};
