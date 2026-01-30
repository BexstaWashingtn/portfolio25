"use client";

import { useEffect, useState } from "react";
import styles from "./backToTopButton.module.css";
import control from "@ui/primitives/controls/control.module.css";
import Button from "./form/Button";
import ArrowIcon from "./ArrowIcon";

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
        threshold: 0.2,
      },
    );

    observer.observe(about);

    return () => observer.disconnect();
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`${styles.backToTopWrapper}`}>
      <Button
        aria-label='Nach oben'
        type='button'
        className={control.iconButton}
        role='button'
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        variant='icon-secondary'
      >
        <ArrowIcon direction='up' className={control.icon} />
      </Button>
    </div>
  );
}
