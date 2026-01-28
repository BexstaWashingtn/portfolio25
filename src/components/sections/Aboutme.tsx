import { getProfileData } from "@/lib/profile/getProfileData";
import Inner from "../utils/Inner";
import styles from "./aboutme.module.css";
import SectionHeader from "./SectionHeader";
import { calculateAgeFromString } from "@/lib/profile/calculateAge";

export default function SectionAboutme({}) {
  const profile = getProfileData();
  const age = calculateAgeFromString(profile.bday);

  // TODO: make actual photo
  // TODO: add a Section Component for all Sections with id,

  return (
    <section className={styles.about} id='about'>
      <Inner variant='narrow' paddingTop='xxl' paddingBottom='xxl'>
        <SectionHeader
          image={{
            src: "/img/aboutme/tb_smile.png",
            alt: `Foto von ${profile.firstname}`,
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
              Ich bin {profile.firstname}, {age} Jahre, aus Brandenburg.
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
