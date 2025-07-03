"use client";

import { useEffect, useState } from "react";
import styles from "./backToTopButton.module.css";
import { FaArrowCircleUp } from "react-icons/fa";

export default function BackToTopButton() {
  // This component renders a button that scrolls the page back to the top when clicked.

  const [isVisible, setIsVisible] = useState(false);
  // isVisible state determines if the button should be displayed or not.

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.backToTopSection}>
      <button
        aria-label='Zurück nach oben'
        type='button'
        className={styles.backToTopButton}
        role='button'
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowCircleUp className={styles.icon} />
      </button>
    </div>
  );
}
