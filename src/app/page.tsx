/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.css";

import SectionHeader from "@/components/sections/SectionHeader";
import SectionHero from "@/components/sections/SectionHero";
import SectionAboutme from "@/components/sections/SectionAboutme";
import SectionProjects from "@/components/sections/SectionProjects";
import SectionMusic from "@/components/sections/SectionMusic";
import SectionContactForm from "@/components/sections/SectionContactForm";
import SectionLegalNotice from "@/components/sections/SectionLegalNotice";

export default function Home() {
  return (
    <>
      <SectionHeader />

      <main className={styles.main}>
        <SectionHero />
        <SectionAboutme />
        <SectionProjects />
        <SectionMusic />
      </main>
      <footer className={styles.footer}>
        <SectionContactForm />
        <SectionLegalNotice />
      </footer>
    </>
  );
}
