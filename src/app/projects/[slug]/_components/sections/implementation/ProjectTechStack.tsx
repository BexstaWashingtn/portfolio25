/* eslint-disable @next/next/no-img-element */
import { BackgroundGradientWrapper } from "@/components/layout/BackgroundGradientWrapper";
import styles from "./projectTechStack.module.css";
import Inner from "@/components/utils/Inner";
import Stack from "@/components/utils/Stack";
import { ProjectTechstackData } from "../../../types/projectData";

const iconMap = {
  frontend: "/img/projects/icons/icon_frontend.svg",
  backend: "/img/projects/icons/icon_backend.svg",
  tools: "/img/projects/icons/icon_tools.svg",
};

type Props = {
  techstack: ProjectTechstackData[];
};

export default function ProjectTechStack({ techstack }: Props) {
  return (
    <section className={styles.techStack}>
      <Inner
        variant='full'
        paddingBottom='md'
        paddingTop='md'
        paddingInline={{ base: false, lg: false, md: false, sm: false }}
      >
        <BackgroundGradientWrapper
          gradient={{
            type: "linear",
            deg: "90deg",
            colorStops: [
              {
                color: "rgba(255,255,255, 0)",
                position: "0%",
              },
              {
                color: "rgba(255, 255, 255, 0.05)",
                position: "65%",
              },
              {
                color: "rgba(255, 255, 255, 0.1)",
                position: "100%",
              },
            ],
          }}
        >
          <Inner variant='full' paddingTop='md' paddingBottom='md'>
            <Inner
              variant='narrow'
              paddingInline={{ base: true, lg: true, md: true, sm: true }}
            >
              <h3>Technologien</h3>
            </Inner>

            <Inner
              paddingTop='md'
              paddingBottom='md'
              variant='wide'
              paddingInline={{ base: true, lg: true, md: true, sm: true }}
            >
              <Stack
                direction='row'
                justifyContent='center'
                gap='lg'
                className={styles.content}
              >
                {techstack.map((cat, listIndex) => {
                  return (
                    <ul
                      key={`${listIndex}-${cat.title}`}
                      className={styles.techStackList}
                    >
                      <li className={styles.techStackItems}>
                        <Stack gap='sm' direction='row' alignItems='center'>
                          <img
                            src={iconMap[cat.icon]}
                            alt=''
                            height='35'
                            width='35'
                            aria-hidden='true'
                          />
                          <h4 className={styles.headline}>{cat.title}</h4>
                        </Stack>

                        <ul className={styles.itemsList}>
                          {cat.items?.map((item, itemIndex) => {
                            return (
                              <li
                                key={`${itemIndex}-${item}`}
                                className={styles.itemItem}
                              >
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    </ul>
                  );
                })}
              </Stack>
            </Inner>
          </Inner>
        </BackgroundGradientWrapper>
      </Inner>
    </section>
  );
}
