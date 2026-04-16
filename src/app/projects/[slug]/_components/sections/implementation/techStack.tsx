/* eslint-disable @next/next/no-img-element */
import { BackgroundGradientWrapper } from "@/components/layout/BackgroundGradientWrapper";
import styles from "./techStack.module.css";
import Inner from "@/components/utils/Inner";
import Stack from "@/components/utils/Stack";

export default function techStack() {
  const data = [
    {
      title: "Frontend",
      icon: "frontend",
      items: [
        "HTML, CSS, JavaScript (ES6+)",
        "React / Next.js",
        "CSS Modules / SCSS / NanoCSS",
        "TypeScript",
        "UI Libraries (Framer Motion)",
      ],
    },
    {
      title: "Backend",
      icon: "backend",
      items: [
        "Node.js, ExpressMongoDB, Firebase, SupabaseREST API / GraphQLAuth (z. B. NextAuth.js)",
      ],
    },
    {
      title: "Tools",
      icon: "tools",
      items: [
        "Git / GitHub",
        "Vercel, Netlify",
        "NPM / PNPM",
        "Figma (für UI-Design)",
        "Postman (für API-Tests)",
      ],
    },
  ];

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
              <h3>TechSteck</h3>
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
                {data.map((list, listIndex) => {
                  return (
                    <ul key={listIndex} className={styles.techStackList}>
                      <li className={styles.techStackItems}>
                        <Stack gap='sm' direction='row' alignItems='center'>
                          <img
                            src={`/img/projects/icons/icon_${list.icon}.svg`}
                            alt={`Headline Icon ${list.icon}`}
                            height='35'
                            width='35'
                          />
                          <h4 className={styles.headline}>{list.title}</h4>
                        </Stack>

                        <ul className={styles.itemsList}>
                          {list.items.map((item, itemIndex) => (
                            <li key={itemIndex} className={styles.itemItem}>
                              {item}
                            </li>
                          ))}
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
