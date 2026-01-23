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
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "";

  const contactData = {
    name: process.env.NEXT_PUBLIC_CONTACT_NAME ?? "Frontend Developer",

    address: {
      street: process.env.NEXT_PUBLIC_CONTACT_STREET ?? "Dev Street 36",
      state: process.env.NEXT_PUBLIC_CONTACT_STATE ?? "Dev World",
    },

    phone: {
      display: phone,
      value: phone.replace(/\s+/g, ""),
    },

    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@example.com",
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
