import styles from "./sectionDetails.module.css";
import { BackgroundGradientWrapper } from "@/components/layout/BackgroundGradientWrapper";
import { BackgroundImageWrapper } from "@/components/layout/BackgroundImageWrapper";
import Inner from "@/components/utils/Inner";
import Image from "next/image";
import { IoIosPerson } from "react-icons/io";
import { IoCalendarClear } from "react-icons/io5";
import { PiToolboxFill } from "react-icons/pi";

export default function SectionDetails() {
  return (
    <section className={styles.projectDetails}>
      <BackgroundImageWrapper
        image={{
          src: "/img/background/particel-waves_mono_1920x1280.jpg",
          alt: "Projekt 1 Background",
          title: "Projekt 1 Background",
          style: { opacity: 0.5 },
        }}
      >
        <BackgroundGradientWrapper
          gradient={{
            type: "linear",
            colorStops: [
              {
                color: "rgba(248, 141, 127, 0.75)",
                position: "0%",
              },
              {
                color: "rgba(0,0,0, 1)",
                position: "100%",
              },
            ],
          }}
        >
          <Inner paddingBottom='xl' paddingTop='xl' variant='narrow'>
            <header className={styles.detailsHeader}>
              <h1 className={styles.hl}>Portfolio 2025</h1>
              <p>Design trifft Code - mit Fokus auf Nutzer & Klarheit.</p>

              <div className={styles.imgWrapper}>
                <Image
                  src='/img/projects/p1/header_image.jpg'
                  alt='P1 Projekt Image'
                  title='P1 Projekt Image'
                  width='848'
                  height='459'
                />
              </div>
            </header>
            <main className={styles.main}>
              <ul className={styles.detailsList}>
                <li className={styles.detailsItem}>
                  <span className={styles.itemIcon}>
                    <IoCalendarClear />
                  </span>
                  <span className={styles.itemText}>Mai – Juli 2025</span>
                </li>
                <li className={styles.detailsItem}>
                  <span className={styles.itemIcon}>
                    <IoIosPerson />
                  </span>
                  <span className={styles.itemText}>
                    Konzeption, UX Research, UI Design, Content, Front- &
                    Backend, Barrierefreiheit
                  </span>
                </li>
                <li className={styles.detailsItem}>
                  <span className={styles.itemIcon}>
                    <PiToolboxFill />
                  </span>
                  <span className={styles.itemText}>
                    Figma, VS Code, Next.js, CSS Modules, TypeScript, Sanity
                    CMS, Prisma Studio, GitHub, Vercel
                  </span>
                </li>
              </ul>
            </main>
          </Inner>
        </BackgroundGradientWrapper>
      </BackgroundImageWrapper>
    </section>
  );
}
