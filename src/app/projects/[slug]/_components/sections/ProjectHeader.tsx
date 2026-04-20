import styles from "./projectHeader.module.css";
import { BackgroundGradientWrapper } from "@/components/layout/BackgroundGradientWrapper";
import { BackgroundImageWrapper } from "@/components/layout/BackgroundImageWrapper";
import Inner from "@/components/utils/Inner";
import Image from "next/image";
import {
  ProjectDetailsData,
  ProjectInformationIcon,
} from "./../../types/projectData";
import { IconType } from "react-icons";
import {
  FaCalendar,
  FaBrain,
  FaToolbox,
  FaLink,
  FaGithub,
} from "react-icons/fa6";

const iconMap: Record<ProjectInformationIcon, IconType> = {
  calendar: FaCalendar,
  brain: FaBrain,
  toolbox: FaToolbox,
  link: FaLink,
  github: FaGithub,
};

type Props = {
  details: ProjectDetailsData;
};

export default function ProjectHeader({ details }: Props) {
  return (
    <section className={styles.projectHero}>
      <BackgroundImageWrapper
        image={{
          src: details.backgroundImageSrc,
          alt: `Hero Background ${details.title}`,
          style: { opacity: 0.5 },
        }}
      >
        <BackgroundGradientWrapper
          gradient={{
            type: "linear",
            colorStops: [
              {
                color: `rgba(${details.mainColorRGB}, 0.75)`,
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
                <h1 className={styles.hl}>{details.title}</h1>
                <p>{details.subtitle}</p>
              </div>

              <div className={styles.imgWrapper}>
                <Image
                  src={details.src}
                  alt={`HereoImage ${details.title}`}
                  width={848}
                  height={459}
                />
              </div>
            </header>
            <div className={styles.content}>
              <ul className={styles.detailsList}>
                {details.projectInformations.map((item) => {
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
            </div>
          </Inner>
        </BackgroundGradientWrapper>
      </BackgroundImageWrapper>
    </section>
  );
}
