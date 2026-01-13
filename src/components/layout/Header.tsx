"use client";

import styles from "./header.module.css";
import { useState, useEffect } from "react";
import Logo from "../ui/Logo";
import Navigation from "../navigation/Navigation";
import MobileButton from "../navigation/MobileButton";

type Props = {
  onClick: () => void; // Function to handle logo click
  // This function is called when the logo is clicked, typically to scroll to the top of the page
};

export default function Header({ onClick }: Props) {
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
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logoImageOverlay}>
          <Logo width={50} height={73} onClick={onClick} />
        </div>

        <Navigation
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
          activeSection={activeSection}
        />

        <MobileButton
          handleMenuToggle={handleMenuToggle}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </div>
    </header>
  );
}
