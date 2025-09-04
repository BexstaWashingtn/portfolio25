"use client";

import { useEffect, useState } from "react";
import styles from "./backToTopButton.module.css";
import { FaArrowCircleUp } from "react-icons/fa";

export default function BackToTopButton() {
  // This component renders a button that scrolls the page back to the top when clicked.

  const [isVisible, setIsVisible] = useState(false);
  // isVisible state determines if the button should be displayed or not.

  useEffect(() => {
    const about = document.getElementById("about");

    if (!about) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(about);

    return () => observer.disconnect();
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.backToTopSection}>
      <a
        href='#main'
        aria-label='Nach oben'
        type='button'
        className={styles.backToTopButton}
        role='button'
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowCircleUp
          aria-hidden='true'
          focusable='false'
          className={styles.icon}
        />
      </a>
    </div>
  );
}
