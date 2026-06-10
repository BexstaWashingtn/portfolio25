import Image from "next/image";
import styles from "./typeAnalysis.module.css";
import Inner from "@components/utils/Inner";
import Stack from "../utils/Stack";
import { TypeAnalysisSection } from "@/types/StartpageData";
import StyledHeadline from "../ui/StyledHeadline/StyledHeadline";

type Props = {
  data: TypeAnalysisSection;
};

export default function SectionTypeAnalysis({ data }: Props) {
  return (
    <section className={styles.typeAnalysis} id={data.settings.id}>
      <div className={styles.background}>
        <Inner
          variant='narrow'
          paddingTop='xxl'
          paddingBottom='xxl'
          paddingInline={{ base: true, lg: true, md: false, sm: false }}
        >
          <Stack
            className='align-stretch-md'
            gap={{ base: "lg", md: "md", sm: "sm" }}
          >
            {data.header.headline && (
              <h3 className={styles.h3}>
                <StyledHeadline text={data.header.headline}></StyledHeadline>
              </h3>
            )}
            <div className={styles.content}>
              <div className={styles.per}>
                <ul className={styles.perTextList}>
                  {data.content.pros.map((item, index) => (
                    <li
                      key={`${index}:${item}`}
                      className={styles.perTextListItem}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className={styles.perImageContainer}>
                  <Image
                    src='/img/type/silhouette_colored_per.png'
                    alt='Silhouette eines Mannes mit farbig hervorgehobenen Gehirnarealen'
                    title='Silhoette eines Mannes für Typanalyse Vorteile'
                    width={123}
                    height={640}
                    className={styles.perImage}
                  />
                </div>
              </div>
              <div className={styles.contra}>
                <div className={styles.contraImageContainer}>
                  <Image
                    src='/img/type/silhouette_colored_contra.png'
                    alt='Silhouette eines Mannes mit farbig hervorgehobenen Gehirnarealen'
                    title='Silhoette eines Mannes für Typanalyse Nachteile'
                    width={123}
                    height={640}
                    className={styles.contraImage}
                  />
                </div>
                <ul className={styles.contraTextList}>
                  {data.content.cons.map((item, index) => (
                    <li
                      key={`${index}:${item}`}
                      className={styles.contraTextListItem}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Stack>
        </Inner>
      </div>
    </section>
  );
}
