import Inner from "@/components/utils/Inner";
import type { InfoList } from "./InfoList.type";
import styles from "./infoList.module.css";
import Image from "next/image";
import { ReactElement } from "react";
import { BackgroundGradientWrapper } from "@/components/layout/BackgroundGradientWrapper";
import { BackgroundImageWrapper } from "@/components/layout/BackgroundImageWrapper";

type Props = {
  children?: ReactElement;
  data: InfoList[];
};

export default function InfoList({ children, data }: Props) {
  if (data) {
    console.log("InfoList: ", data);
  }

  return (
    <section className={styles.infoList}>
      <BackgroundGradientWrapper
        gradient={{
          type: "radial",
          shape: "circle",
          startX: "35%",
          startY: "100%",
          colorStops: [
            { color: "#2D1A18", position: "0%" },
            { color: "#0B0000", position: "100%" },
          ],
        }}
      >
        <BackgroundImageWrapper
          image={{
            src: "/img/background/night_sillhouette.jpg",
            width: 1920,
            alt: "Sillhouette at Night",
          }}
          blur={20}
        >
          <Inner paddingBottom='xl' paddingTop='xl' variant='narrow'>
            {data.map(({ icon, headline, text }, index) => {
              return (
                <div key={index} className={styles.item}>
                  <div className={styles.icon}>
                    <Image
                      src={icon.src}
                      width={icon.width}
                      height={icon.height}
                      title={icon.title}
                      alt={icon.alt}
                    />
                  </div>
                  <div className={styles.content}>
                    <h2 className={styles.headline}>{headline}</h2>
                    <div className={styles.text}>{text}</div>
                  </div>
                </div>
              );
            })}
          </Inner>

          {children}
        </BackgroundImageWrapper>
      </BackgroundGradientWrapper>
    </section>
  );
}
