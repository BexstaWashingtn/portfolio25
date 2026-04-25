import styles from "./page.module.css";

import Hero from "@/components/sections/Hero";
import { BackgroundGradientWrapper } from "@/components/layout/BackgroundGradientWrapper";
import { BackgroundImageWrapper } from "@/components/layout/BackgroundImageWrapper";
import Aboutme from "@/components/sections/Aboutme";
import TypeAnalysis from "@/components/sections/TypeAnalysis";
import Projects from "@/components/sections/projects/SectionProjects";
import WorkingMethod from "@/components/sections/workingMethods/WorkingMethod";
import Skills from "@/components/sections/skills/Skills";
import Contact from "@/components/sections/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />

      <main id='main' className={styles.main}>
        <BackgroundImageWrapper
          image={{
            src: "/img/aboutme/backgroundImage.jpg",
            alt: "Neurologische Strukturen mit Knotenpunkten",
            title: "Neurologische Strukturen mit Knotenpunkten",
            style: { opacity: 1 },
          }}
          blur={32}
        >
          <BackgroundGradientWrapper
            gradient={{
              type: "radial",
              shape: "circle",
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
          >
            <Aboutme />
            <TypeAnalysis />
            <WorkingMethod />
          </BackgroundGradientWrapper>
        </BackgroundImageWrapper>
        <Skills />
        <Projects />
        {/*<SectionMusic />*/}
        <Contact />
      </main>
    </>
  );
}
