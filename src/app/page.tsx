/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.css";

import SectionHeader from "@/components/sections/SectionHeader";
import SectionHero from "@/components/sections/SectionHero";
import SectionAboutme from "@/components/sections/SectionAboutme";
import SectionProjects from "@/components/sections/SectionProjects";
import SectionMusic from "@/components/sections/SectionMusic";
import SectionContactForm from "@/components/sections/SectionContactForm";
import SectionLegalNotice from "@/components/sections/SectionLegalNotice";
import BackToTopButton from "@/components/BackToTopButton";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <SectionHeader />
      </header>

      <main className={styles.main}>
        <SectionHero />
        <SectionAboutme />
        <SectionProjects />
        <SectionMusic />
        <SectionContactForm />
        <BackToTopButton />
      </main>
      <footer className={styles.footer}>
        <SectionLegalNotice />
      </footer>
    </>
  );
}
