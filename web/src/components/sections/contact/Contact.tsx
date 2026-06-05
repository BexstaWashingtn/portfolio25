import Inner from "../../utils/Inner";
import Stack from "../../utils/Stack";

import styles from "./contact.module.css";
import { BackgroundImageWrapper } from "../../layout/BackgroundImageWrapper";
import { BackgroundGradientWrapper } from "../../layout/BackgroundGradientWrapper";
import SectionHeader from "../Header";
import ContactInfos from "./ContactInfos";
import ContactForm from "./ContactForm";
import { ContactSection } from "@/types/StartpageData";

// TODO: Form sendable machen
// TODO: add CSS boxshadow

type Props = {
  data: ContactSection;
};

export default function SectionContact({ data }: Props) {
  const content = (
    <Inner variant='narrow' paddingTop='xxl' paddingBottom='xxl'>
      <Stack gap='xl' className='align-center'>
        {data.header && (
          <SectionHeader
            headline={data.header.headline}
            text={data.header.text}
          />
        )}

        <div className={styles.bodyWrapper}>
          <ContactInfos data={data.content} />
          <ContactForm />
        </div>
      </Stack>
    </Inner>
  );

  return (
    <section className={styles.contact} id={data.settings.id}>
      {data.settings.backgroundImage ? (
        <BackgroundImageWrapper blur={8} image={data.settings.backgroundImage}>
          <BackgroundGradientWrapper
            gradient={{
              type: "radial",
              shape: "circle",
              startX: "25%",
              startY: "0",
              colorStops: [
                {
                  color: "rgba(113, 21, 33, 0.8)",
                  position: "0%",
                },

                {
                  color: "rgba(0, 0, 0, 0.8)",
                  position: "100%",
                },
              ],
            }}
          >
            {content}
          </BackgroundGradientWrapper>
        </BackgroundImageWrapper>
      ) : (
        content
      )}
    </section>
  );
}
