import styles from "./contentNotice.module.css";
import Image from "next/image";
import type { ContentNotice } from "./ContentNotice.type.ts";

type Props = {
  data: ContentNotice;
  background?: "gradientBackground" | "surfaceBackground";
};

export default function ContentNotice({
  data,
  background = "gradientBackground",
}: Props) {
  const { icon, text } = data;

  return (
    <section id='pageIntro' className={styles.pageIntro}>
      <div className={styles[background]}>
        <div className={styles.inner}>
          {icon && (
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
          )}
          {text && (
            <div className={styles.textCon}>
              <span className={styles.text}>{text}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
