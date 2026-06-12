import styles from "./pageIntro.module.css";
import Image from "next/image";
import { Image as ImageTyppe } from "@/types/Image";
import { BackgroundGradientWrapper } from "../layout/BackgroundGradientWrapper";

type Props = {
  data: { icon: ImageTyppe; text: string };
};

export default function PageIntro({ data }: Props) {
  const { icon, text } = data;

  return (
    <section id='pageIntro' className={styles.pageIntro}>
      <BackgroundGradientWrapper
        gradient={{
          type: "linear",
          deg: "90deg",
          colorStops: [
            {
              color: "rgba(0, 0, 0, 1)",
              position: "0%",
            },

            {
              color: "rgba(113, 21, 33, 1)",
              position: "67%",
            },
          ],
        }}
      >
        <div className={styles.inner}>
          <div className={styles.iconCon}>
            <Image
              className={styles.icon}
              src={icon.src}
              alt={icon.alt}
              title={icon.title}
              width={icon.width}
              height={icon.height}
            />
          </div>
          <div className={styles.textCon}>
            <span className={styles.text}>{text}</span>
          </div>
        </div>
      </BackgroundGradientWrapper>
    </section>
  );
}
