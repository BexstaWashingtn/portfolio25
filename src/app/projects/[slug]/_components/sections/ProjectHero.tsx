import styles from "./projectHero.module.css";
import { BackgroundGradientWrapper } from "@/components/layout/BackgroundGradientWrapper";
import { BackgroundImageWrapper } from "@/components/layout/BackgroundImageWrapper";
import Inner from "@/components/utils/Inner";
import Image from "next/image";

import {
  FaCalendar,
  FaBrain,
  FaToolbox,
  FaLink,
  FaGithub,
} from "react-icons/fa6";

const iconMap = {
  calendar: FaCalendar,
  brain: FaBrain,
  toolbox: FaToolbox,
  link: FaLink,
  github: FaGithub,
};

type IconKey = keyof typeof iconMap;

type DataItem = {
  id: number;
  icon: IconKey;
  description: string;
  href?: string;
};

const datas: DataItem[] = [
  {
    id: 1,
    icon: "calendar",
    description: "Mai – Juli 2025",
  },
  {
    id: 2,
    icon: "brain",
    description:
      "Konzeption, UX Research, UI Design, Content, Front- & Backend, Barrierefreiheit",
  },
  {
    id: 3,
    icon: "toolbox",
    description:
      "Figma, VS Code, Next.js, CSS Modules, TypeScript, Sanity CMS, Prisma Studio, GitHub, Vercel",
  },
  {
    id: 4,
    icon: "link",
    description: "Live Demo",
    href: "https://test.de",
  },
  {
    id: 5,
    icon: "github",
    description: "GitHub",
    href: "https://test.de",
  },
];

export default function ProjectHero() {
  return (
    <section className={styles.projectHero}>
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
            <header className={styles.header}>
              <div className={styles.headerDescription}>
                <h1 className={styles.hl}>Portfolio 2025</h1>
                <p>Design trifft Code - mit Fokus auf Nutzer & Klarheit.</p>
              </div>

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
                {datas.map((item) => {
                  const Icon = iconMap[item.icon];

                  const content = (
                    <>
                      <span className={styles.itemIcon}>
                        {Icon && <Icon />}
                      </span>
                      <span className={styles.itemText}>
                        {item.description}
                      </span>
                    </>
                  );

                  return (
                    <li key={item.id} className={styles.detailsItem}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className={styles.itemLink}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>
            </main>
          </Inner>
        </BackgroundGradientWrapper>
      </BackgroundImageWrapper>
    </section>
  );
}
