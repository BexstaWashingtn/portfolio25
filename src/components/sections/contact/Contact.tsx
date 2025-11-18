import Inner from "../../utils/Inner";
import Stack from "../../utils/Stack";

import styles from "./contact.module.css";
import { BackgroundImageWrapper } from "../../layout/BackgroundImageWrapper";
import { BackgroundGradientWrapper } from "../../layout/BackgroundGradientWrapper";
import SectionHeader from "../SectionHeader";
import ContactAddress from "./ContactAddress";
import ContactForm from "./ContactForm";

// TODO: Form sendable machen
// TODO: add CSS boxshadow

export default function SectionContact() {
  const contactData = {
    name: "Thomas Badrow",

    address: {
      street: "Hafenstr. 3c",
      postalCode: "15537",
      city: "Erkner",
    },

    phone: {
      display: "+49 179 12 88",
      value: "+491791288", // für tel:-Link
    },

    email: "kontakt@tomasbee.de",
  };

  return (
    <section className={styles.contact} id='contact'>
      <BackgroundImageWrapper
        blur={8}
        image={{
          src: "/img/contact/background.jpg",
          alt: "Hintergundbild für den Kontaktbereich - ein leerer Flur",
          style: { opacity: 0.6 },
        }}
      >
        <BackgroundGradientWrapper
          gradient={{
            type: "circle",
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
          <Inner variant='narrow' paddingTop='xxl' paddingBottom='xxl'>
            <Stack gap='xl' className='align-center'>
              <SectionHeader
                headline='Kontakt'
                text='Lust auf ein gemeinsames Projekt, eine Rückmeldung oder
                  einfach ein Austausch? Hier ist Raum für Ideen, Anfragen und
                  erste Impulse. Jede Nachricht wird gelesen und beantwortet.'
              />

              <div className={styles.bodyWrapper}>
                <ContactAddress contactData={contactData} />
                <ContactForm />
              </div>
            </Stack>
          </Inner>
        </BackgroundGradientWrapper>
      </BackgroundImageWrapper>
    </section>
  );
}
