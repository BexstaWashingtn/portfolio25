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
  const devTime = details.projectInformations.developmentTime;
  const methods = details.projectInformations.methods;
  const tools = details.projectInformations.tools;
  const liveDemo = details.projectInformations.liveDemo;
  const github = details.projectInformations.github;

  const IconDevTime = iconMap.calendar;
  const IconMethods = iconMap.brain;
  const IconTools = iconMap.toolbox;
  const IconLiveDemo = iconMap.link;
  const IconGithub = iconMap.github;

  const content = (
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
          <div className={styles.headerContent}>
            <h1 className={styles.hl}>{details.title}</h1>
            <p>{details.subtitle}</p>
          </div>

          <div className={styles.imgWrapper}>
            <Image
              src={details.projectImage.src}
              alt={`HeroImage ${details.title}`}
              width={848}
              height={459}
            />
          </div>
        </header>
        <div className={styles.content}>
          <ul className={styles.detailsList}>
            {devTime?.description && (
              <li className={styles.detailsItem}>
                <span className={styles.itemIcon}>
                  <IconDevTime
                    className={styles.icon}
                    title='Entwicklungszeit'
                  />
                </span>
                <span className={styles.itemText}>{devTime.description}</span>
              </li>
            )}

            {methods?.length && (
              <li className={styles.detailsItem}>
                <span className={styles.itemIcon}>
                  <IconMethods
                    className={styles.icon}
                    title='angewandte Methoden'
                  />
                </span>
                <span className={styles.itemText}>{methods.join(", ")}</span>
              </li>
            )}

            {tools?.length && (
              <li className={styles.detailsItem}>
                <span className={styles.itemIcon}>
                  <IconTools className={styles.icon} title='benutzte Tools' />
                </span>
                <span className={styles.itemText}>{tools.join(", ")}</span>
              </li>
            )}

            {liveDemo?.href && (
              <li className={styles.detailsItem}>
                <span className={styles.itemIcon}>
                  <IconLiveDemo className={styles.icon} />
                </span>
                <a
                  href={liveDemo.href}
                  className={styles.itemLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className={styles.itemText}>LiveDemo</span>
                </a>
              </li>
            )}

            {github?.href && (
              <li className={styles.detailsItem}>
                <span className={styles.itemIcon}>
                  <IconGithub className={styles.icon} />
                </span>
                <a
                  href={github.href}
                  className={styles.itemLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className={styles.itemText}>GitHub</span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </Inner>
    </BackgroundGradientWrapper>
  );

  return (
    <section className={styles.projectHero} id='ProjectHeader'>
      {details.backgroundImage ? (
        <BackgroundImageWrapper
          image={{
            src: details.backgroundImage.src,
            alt: `Hero Background ${details.title}`,
            style: { opacity: 0.5 },
          }}
        >
          {content}
        </BackgroundImageWrapper>
      ) : (
        content
      )}
    </section>
  );
}
