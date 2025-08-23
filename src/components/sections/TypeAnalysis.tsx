import styles from "./typeAnalysis.module.css";
import Inner from "../utils/Inner";

export default function TypeAnalysis() {
  return (
    <section className={styles.typeAnalysis} id='type-analysis'>
      <div className={styles.background}>
        <Inner variant='narrow' paddingTop='xl' paddingBottom='xl'>
          <h2 className={styles.h2}>Tyanalyse</h2>

          <div className={styles.content}>
            <div className={styles.per}>
              <div className={styles.perText}>
                <ul>
                  <li>kreativ & gestaltungssicher</li>
                  <li>experimentierfreudig & begeisterungsfähig</li>
                  <li>eigenständig & lösungsorientiert</li>
                  <li>visuell denkend</li>
                  <li>empathisch & reflektiert</li>
                  <li>Naturverbunden & sinnorientiert</li>
                </ul>
              </div>
              <div className={styles.perImage}></div>
            </div>
            <div className={styles.contra}>
              <div className={styles.contraImage}></div>
              <div className={styles.contraText}>
                <ul>
                  <li>braucht klare Prioritäten bei komplexen Aufgaben</li>
                  <li>frustriert bei sinnlosen oder monotonen Aufgabe</li>
                  <li>reagiert sensibel auf Einschränkungen</li>
                  <li>tut sich schwer mit rein Abstraktem</li>
                  <li>emotional sensibel</li>
                  <li>erschöpft in rein digitalen Kontexten</li>
                </ul>
              </div>
            </div>
          </div>
        </Inner>
      </div>
    </section>
  );
}
