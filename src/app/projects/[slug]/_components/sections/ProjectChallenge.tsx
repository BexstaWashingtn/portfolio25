import Inner from "@/components/utils/Inner";
import SectionHeader from "../sectionHeader/SectionHeader";
import styles from "./projectChallenge.module.css";

export default function ProjectChallenge() {
  return (
    <section className={styles.projectChallenge}>
      <Inner paddingBottom='md' paddingTop='md' variant='narrow'>
        <SectionHeader
          headline='Herausforderung'
          icon={{
            src: "/img/projects/icons/icon_challenge.svg",
            alt: "Projekt Herrausforderungen",
          }}
        />

        <div className={styles.content}>
          <div className={styles.contentItem}>
            <h3 className={styles.subheadline}>Ausgangssituation</h3>
            <p>
              Vor Projektbeginn verfügte ich über kein Portfolio, das meine
              Kenntnisse in UI Design, UX-Prozessen und Next.js anhand eines
              praxisnahen Referenzprojekts greifbar machte.
            </p>
          </div>

          <div className={styles.contentItem}>
            <h3 className={styles.subheadline}>Projektgrund</h3>
            <p>
              Ziel war es, ein Portfolio zu entwickeln, das nicht nur meine
              Projekte auflistet, sondern auch meine Herangehensweise in Design,
              UX und Entwicklung nachvollziehbar macht. Die Motivation bestand
              darin, ein Referenzprojekt zu schaffen, das für potenzielle
              Arbeitgeber oder Auftraggeber sowohl gestalterisch als auch
              technisch überzeugend ist. Um den Praxisbezug zu stärken, habe ich
              bewusst mit den Tools und Methoden gearbeitet, die ich während der
              Weiterbildung erlernt habe – darunter Next.js, REST und
              barrierefreie Gestaltung. Das Projekt wurde unter realistischen
              Rahmenbedingungen umgesetzt: begrenzter Zeitrahmen, eigenständig
              geplant und vollständig selbst entwickelt.
            </p>
          </div>
        </div>
      </Inner>
    </section>
  );
}
