import Inner from "../utils/Inner";
import styles from "./aboutme.module.css";
import SectionHeader from "./SectionHeader";

export default function SectionAboutme({}) {
  const birthYear = 1982;
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  // TOOO: add background Components for Gradient and Image - as one???
  // TODO: make actual photo
  // TODO: add a Section Component for all Sections with id,

  return (
    <section className={styles.about} id='about'>
      <Inner variant='narrow' paddingTop='xxl' paddingBottom='xxl'>
        <SectionHeader
          image={{
            src: "/img/aboutme/tb_smile.png",
            alt: "Foto von Thomas mit einem Lächeln",
            width: 286,
            height: 382,
            className: "",
          }}
          headline={
            <>
              Über <span className='highlight-peach'>mich</span>
            </>
          }
          text={
            <>
              Ich bin Thomas, {age} Jahre, aus Brandenburg.
              <br />
              Schon früh entdeckte ich meine Leidenschaft für Gestaltung – vom
              Zeichnen über Graffiti bis hin zur digitalen Medienwelt. Seit
              meiner Ausbildung zum Mediengestalter (2001) entwickle ich
              digitale Produkte – heute vor allem moderne Webanwendungen mit
              React und Next.js.
            </>
          }
          className='borderImage'
        />
      </Inner>
    </section>
  );
}
