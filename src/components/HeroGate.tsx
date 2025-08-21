"use client";
import styles from "./heroGate.module.css";

import SectionHeader from "@/components/sections/SectionHeader";
import SectionHero from "@/components/sections/SectionHero";
import SectionAboutme from "@/components/sections/SectionAboutme";
import SectionProjects from "@/components/sections/SectionProjects";
//import SectionMusic from "@/components/sections/SectionMusic";
import SectionContactForm from "@/components/sections/SectionContactForm";
import SectionLegalNotice from "@/components/sections/SectionLegalNotice";
import BackToTopButton from "@/components/BackToTopButton";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HeroGate() {
  const [showFullPage, setShowFullPage] = useState(false);
  const [pageIsLocked, setPageIsLocked] = useState(true);
  const [isCheckingUrlParams, setIsCheckingUrlParams] = useState(true);

  useEffect(() => {
    // Check if the URL contains a query parameter for "freeentry"
    // If it does, set showFullPage to true immediately
    // This allows users to bypass the hero section if they have a special link
    const params = new URLSearchParams(window.location.search);
    const hasFreeEntry = params.has("freeentry");

    // If the full page is already shown, no need to add event listeners
    // This prevents adding multiple event listeners if the component re-renders
    if (showFullPage) return;

    // If the user has a special link with "freeentry", show the full page immediately
    // Otherwise, set up event listeners to unlock the full page on user interaction
    if (hasFreeEntry) {
      setPageIsLocked(false);
      setIsCheckingUrlParams(false);

      const unlock = () => {
        setShowFullPage(true);
      };

      // Function to unlock the full page
      // This function will be called when the user interacts with the page

      // Set a timeout to delay the unlocking of the full page
      // This is to ensure that the hero section is displayed for a brief moment before allowing interaction
      const timeout = setTimeout(() => {
        // Add event listeners to unlock the full page on wheel or click
        // This will allow the user to interact with the page after the initial hero section
        window.addEventListener("wheel", unlock, { once: true });
        window.addEventListener("click", unlock, { once: true });
      }, 100);

      // Clean up the event listeners when the component unmounts
      // This ensures that the event listeners are removed to prevent memory leaks
      return () => {
        clearTimeout(timeout);
        window.removeEventListener("wheel", unlock);
        window.removeEventListener("click", unlock);
      };
    } else {
      console.log("Page is locked, checking URL parameters is ready");

      setPageIsLocked(true);
      setIsCheckingUrlParams(false);
    }
  }, [showFullPage]);

  return (
    <AnimatePresence>
      {!showFullPage && (
        <motion.div
          key='hero'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHero
            isCheckingUrlParams={isCheckingUrlParams}
            pageIsLocked={pageIsLocked}
          />
        </motion.div>
      )}

      {showFullPage && (
        <motion.div
          key='main'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <header className={styles.header}>
            <SectionHeader onLogoClick={() => setShowFullPage(false)} />
          </header>

          <main className={styles.main}>
            <SectionAboutme />
            <SectionProjects />
            {/*<SectionMusic />*/}
            <SectionContactForm />
            <BackToTopButton />
          </main>

          <footer className={styles.footer}>
            <SectionLegalNotice />
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
