import styles from "./backgroundImageWrapper.module.css";
import Image from "next/image";
import React from "react";

type ImageProps = {
  src: string;
  height?: number;
  width?: number;
  title: string;
  alt: string;
  style?: React.CSSProperties;
};

type Props = {
  children: React.ReactNode;
  image?: ImageProps;
  blur?: number;
};

export const BackgroundImageWrapper = ({
  children,
  image,
  blur = 16,
}: Props) => {
  if (!image) return <>{children}</>;

  let content = <>{children}</>;

  if (image) {
    content = (
      <div
        className={styles.backgroundImageWrapper}
        style={{
          ...(typeof blur === "number"
            ? {
                WebkitBackdropFilter: `blur(${blur}px)`,
                backdropFilter: `blur(${blur}px)`,
              }
            : {}),
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          title={image.title}
          {...(image.width || image.height
            ? { width: image.width, height: image.height }
            : { fill: true })}
          style={{
            ...image.style,
          }}
          className={styles.backgroundImage}
        />

        {content}
      </div>
    );
  }

  return content;
};
