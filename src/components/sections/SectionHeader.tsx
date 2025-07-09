"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./sectionHeader.module.css";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useState, useEffect } from "react";

export default function SectionHeader() {
  // State to manage the mobile menu open/close state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Function to toggle the mobile menu
  // This function toggles the state of the mobile menu
  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // State to manage the active section
  // This state is used to highlight the active section in the navigation
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Effect to observe section visibility and update the active section
  // This effect uses IntersectionObserver to detect which section is currently visible in the viewport
  // and updates the active section state accordingly
  // It observes all sections with an ID and sets the active section based on visibility
  // It also cleans up the observer when the component unmounts
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    console.log("Sections to observe:", sections);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        threshold: 0.8,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className={styles.headerInner}>
      <div className={styles.logo}>
        <Link
          href='/'
          aria-current='page'
          onClick={(e) => {
            // Prevent default link behavior
            e.preventDefault();

            // Close the mobile menu if it is open
            // and reset the active link
            setIsMobileMenuOpen(false);

            // Scroll to the top of the page smoothly
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img
            src='img/logo_beige.svg'
            className={styles.logoImage}
            alt='Logo Thomas Badrow'
          />
        </Link>
      </div>
      <nav
        className={styles.nav}
        aria-label='Hauptnavigation'
        id='main-navigation'
        data-open={isMobileMenuOpen}
      >
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link
              className={`${styles.navLink} ${
                activeSection === "about" ? styles.active : ""
              }`}
              href='#about'
              onClick={(e) => {
                e.preventDefault();

                // Close the mobile menu if it is open
                setIsMobileMenuOpen(false);

                // Scroll to the "Über mich" section smoothly
                const aboutSection = document.getElementById("about");

                if (aboutSection) {
                  aboutSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Uber mich
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link
              className={`${styles.navLink} ${
                activeSection === "projects" ? styles.active : ""
              }`}
              href='#projects'
              onClick={(e) => {
                e.preventDefault();

                // Close the mobile menu if it is open
                setIsMobileMenuOpen(false);

                // Scroll to the "Projekte" section smoothly
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Projekte
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link
              className={`${styles.navLink} ${
                activeSection === "music" ? styles.active : ""
              }`}
              href='#music'
              onClick={(e) => {
                // Prevent default link behavior
                e.preventDefault();

                // Close the mobile menu if it is open
                setIsMobileMenuOpen(false);

                // Scroll to the "Musik" section smoothly
                const musicSection = document.getElementById("music");
                if (musicSection) {
                  musicSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Musik
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link
              className={`${styles.navLink} ${
                activeSection === "contact" ? styles.active : ""
              }`}
              href='#contact'
              onClick={(e) => {
                // Prevent default link behavior
                e.preventDefault();

                // Close the mobile menu if it is open
                // and set the active link
                setIsMobileMenuOpen(false);

                // Scroll to the "Kontakt" section smoothly
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.headerMobileMenuCon}>
        <button
          onClick={handleMenuToggle}
          aria-label='Menü öffnen'
          aria-controls='main-navigation'
          aria-expanded={isMobileMenuOpen}
          className={styles.headerMobileMenuBtn}
        >
          {!isMobileMenuOpen ? (
            <IoMdMenu className={styles.headerMobileMenuicon} />
          ) : (
            <IoMdClose className={styles.headerMobileMenuicon} />
          )}
        </button>
      </div>
    </div>
  );
}
