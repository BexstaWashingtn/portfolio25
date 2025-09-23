import Image from "next/image";
import styles from "./typeAnalysis.module.css";
import Inner from "@components/utils/Inner";
import Stack from "../utils/Stack";

const typeAnalysisData = {
  pro: [
    {
      entry: "kreativ & gestaltungssicher",
    },
    {
      entry: "experimentierfreudig & begeisterungsfähig",
    },
    {
      entry: "eigenständig & lösungsorientiert",
    },
    {
      entry: "visuell denkend",
    },
    {
      entry: "empathisch & reflektiert",
    },
    {
      entry: "Naturverbunden & sinnorientiert",
    },
  ],
  contra: [
    {
      entry: "braucht klare Prioritäten bei komplexen Aufgaben",
    },
    {
      entry: "braucht klare Prioritäten bei komplexen Aufgaben",
    },
    {
      entry: "reagiert sensibel auf Einschränkungen",
    },
    {
      entry: "tut sich schwer mit rein Abstraktem",
    },
    {
      entry: "emotional sensibel",
    },
    {
      entry: "erschöpft in rein digitalen Kontexten",
    },
  ],
};

export default function TypeAnalysis() {
  return (
    <section className={styles.typeAnalysis} id='type-analysis'>
      <div className={styles.background}>
        <Inner
          variant='narrow'
          paddingTop='xxl'
          paddingBottom='xxl'
          paddingInline={{ base: true, lg: true, md: false, sm: false }}
        >
          <Stack className='align-stretch-md' gap='lg'>
            <h2 className={styles.h2}>Typanalyse</h2>
            <div className={styles.content}>
              <div className={styles.per}>
                <ul className={styles.perTextList}>
                  {typeAnalysisData.pro.map((item, index) => (
                    <li
                      key={`${index}:${item}`}
                      className={styles.perTextListItem}
                    >
                      {item.entry}
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
                  {typeAnalysisData.contra.map((item, index) => (
                    <li
                      key={`${index}:${item}`}
                      className={styles.contraTextListItem}
                    >
                      {item.entry}
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
