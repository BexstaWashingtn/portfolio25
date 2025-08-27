import Image from "next/image";
import styles from "./typeAnalysis.module.css";
import Inner from "@components/utils/Inner";

export default function TypeAnalysis() {
  return (
    <section className={styles.typeAnalysis} id='type-analysis'>
      <div className={styles.background}>
        <Inner variant='narrow' paddingTop='xl' paddingBottom='xl'>
          <h2 className={styles.h2}>Typanalyse</h2>

          <div className={styles.content}>
            <div className={styles.per}>
              <ul className={styles.perTextList}>
                <li className={styles.perTextListItem}>
                  kreativ & gestaltungssicher
                </li>
                <li className={styles.perTextListItem}>
                  experimentierfreudig & begeisterungsfähig
                </li>
                <li className={styles.perTextListItem}>
                  eigenständig & lösungsorientiert
                </li>
                <li className={styles.perTextListItem}>visuell denkend</li>
                <li className={styles.perTextListItem}>
                  empathisch & reflektiert
                </li>
                <li className={styles.perTextListItem}>
                  Naturverbunden & sinnorientiert
                </li>
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
                <li className={styles.contraTextListItem}>
                  braucht klare Prioritäten bei komplexen Aufgaben
                </li>
                <li className={styles.contraTextListItem}>
                  frustriert bei sinnlosen oder monotonen Aufgabe
                </li>
                <li className={styles.contraTextListItem}>
                  reagiert sensibel auf Einschränkungen
                </li>
                <li className={styles.contraTextListItem}>
                  tut sich schwer mit rein Abstraktem
                </li>
                <li className={styles.contraTextListItem}>
                  emotional sensibel
                </li>
                <li className={styles.contraTextListItem}>
                  erschöpft in rein digitalen Kontexten
                </li>
              </ul>
            </div>
          </div>
        </Inner>
      </div>
    </section>
  );
}
