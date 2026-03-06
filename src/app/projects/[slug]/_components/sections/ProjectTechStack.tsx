import { BackgroundGradientWrapper } from "@/components/layout/BackgroundGradientWrapper";
import styles from "./projectTechStack.module.css";
import Inner from "@/components/utils/Inner";
import Stack from "@/components/utils/Stack";

export default function ProjectTechStack() {
  const data = [
    {
      title: "Frontend",
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
      items: [
        "Node.js, ExpressMongoDB, Firebase, SupabaseREST API / GraphQLAuth (z. B. NextAuth.js)",
      ],
    },
    {
      title: "Tools",
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
        paddingBottom='md'
        paddingTop='md'
        variant='full'
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
                color: "rgba(248, 141, 127, 0.125)",
                position: "65%",
              },
              {
                color: "rgba(248, 141, 127, 0.25)",
                position: "100%",
              },
            ],
          }}
        >
          <Inner
            paddingBottom='md'
            paddingTop='xl'
            variant='narrow'
            paddingInline={{ base: true, lg: true, md: true, sm: true }}
          >
            <h3>TechSteck</h3>
          </Inner>

          <Inner
            paddingBottom='xl'
            paddingTop='md'
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
                      <h4 className={styles.headline}>{list.title}</h4>

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
        </BackgroundGradientWrapper>
      </Inner>
    </section>
  );
}
