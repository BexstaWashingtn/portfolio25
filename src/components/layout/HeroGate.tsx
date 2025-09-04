"use client";

import styles from "./heroGate.module.css";

import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import { BackgroundGradientWrapper } from "./BackgroundGradientWrapper";
import { BackgroundImageWrapper } from "./BackgroundImageWrapper";
import Aboutme from "@/components/sections/Aboutme";
import TypeAnalysis from "@components//sections/TypeAnalysis";
import Projects from "@/components/sections/Projects";
import ContactForm from "@/components/sections/ContactForm";
import LegalNotice from "@/components/layout/Footer";
import BackToTopButton from "@/components/ui/BackToTopButton";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WorkingMethod from "../sections/workingMethods/WorkingMethod";
import Skills from "../sections/skills/Skills";

export default function HeroGate({ hasFreeEntry }: { hasFreeEntry?: boolean }) {
  const [showFullPage, setShowFullPage] = useState(false);

  useEffect(() => {
    if (!hasFreeEntry && showFullPage) return;

    const unlock = () => setShowFullPage(true);

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
  }, [hasFreeEntry, showFullPage]);

  useEffect(() => {
    if (!showFullPage) return;

    const handleWheel = (e: WheelEvent) => {
      // If the user scrolls up, hide the full page and show the hero section
      if (window.scrollY === 0 && e.deltaY < 0) {
        setShowFullPage(false); // Hide the full page
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
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
          <Hero isLocked={!hasFreeEntry} />
        </motion.div>
      )}

      {/* TODO: maybe add mouse wheel motion from section to section only for PC and Tablet */}
      {/* TODO: add section navigation to left site only for PC and Tablet */}

      {showFullPage && (
        <motion.div
          key='main'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header onClick={() => setShowFullPage(false)} />

          <main id='main' className={styles.main}>
            <BackgroundImageWrapper
              image={{
                src: "/img/aboutme/backgroundImage.jpg",
                width: 1440,
                height: 1440,
                alt: "Neurologische Strukturen mit Knotenpunkten",
                title: "Neurologische Strukturen mit Knotenpunkten",
                style: { opacity: 0.1 },
              }}
            >
              <BackgroundGradientWrapper
                gradient={{
                  type: "circle",
                  startX: "75%",
                  startY: "0%",
                  colorStops: [
                    {
                      color: "rgba(113,21,33, 0.75)",
                      position: "0%",
                    },

                    {
                      color: "rgba(20,20,20, 0.75)",
                      position: "67%",
                    },
                    {
                      color: "rgba(75, 47, 38, 0.75)",
                      position: "100%",
                    },
                  ],
                }}
                blur={0}
              >
                <Aboutme />
                <TypeAnalysis />
                <WorkingMethod />
              </BackgroundGradientWrapper>
            </BackgroundImageWrapper>
            <Skills />
            <Projects />
            {/*<SectionMusic />*/}
            <ContactForm />
            <BackToTopButton />
          </main>

          <footer className={styles.footer}>
            <LegalNotice />
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
