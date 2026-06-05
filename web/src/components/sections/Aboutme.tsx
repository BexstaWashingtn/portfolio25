import Inner from "../utils/Inner";
import styles from "./aboutme.module.css";
import SectionHeader from "./Header";
import { AboutMeSection } from "@/types/StartpageData";

type Props = {
  data: AboutMeSection;
};

export default function SectionAboutme({ data }: Props) {
  // TODO: make actual photo
  // TODO: add a Section Component for all Sections with id,
  // TODO: clear old css code (header, timeline etc.)

  return (
    <section className={styles.about} id={data.settings.id}>
      <Inner variant='narrow' paddingTop='xxl' paddingBottom='xxl'>
        {data.header && (
          <SectionHeader
            image={data.header.image ?? undefined}
            headline={data.header.headline}
            text={data.header.text}
            className='borderImage'
          />
        )}
      </Inner>
    </section>
  );
}
