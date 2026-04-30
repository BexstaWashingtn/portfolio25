"use client";

import { useEffect, useState } from "react";
import { BackgroundGradientWrapper } from "../BackgroundGradientWrapper";
import HeaderLogo from "./HeaderLogo";
import NavigationClient from "./navigation/NavigationClient";

type Props = {
  styles: Record<string, string>;
};

export default function HeaderClient({ styles }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const isLogoVisible = !isHeroVisible || isMobileMenuOpen;
  const [scrollProgress, setScrollProgress] = useState(0);
  const r = Math.round(113 * scrollProgress);
  const g = Math.round(21 * scrollProgress);
  const b = Math.round(33 * scrollProgress);
  const rubyColor = `rgba(${r}, ${g}, ${b}, 1)`;

  useEffect(() => {
    const heroSection = document.querySelector<HTMLElement>("section#hero");

    if (!heroSection) {
      setIsHeroVisible(false);
      return;
    }

    const heroHeight = heroSection.offsetHeight;

    const handleScroll = () => {
      const nextProgress = Math.min(window.scrollY / heroHeight, 1);
      setScrollProgress(nextProgress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5,
      },
    );

    observer.observe(heroSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <BackgroundGradientWrapper
      gradient={{
        type: "linear",
        deg: "90deg",
        colorStops: [
          {
            color: "rgba(0, 0, 0, 1)",
            position: "0%",
          },

          {
            color: rubyColor,
            position: "67%",
          },
        ],
      }}
    >
      <div className={styles.inner}>
        <HeaderLogo
          isLogoVisible={isLogoVisible}
          style={styles.logoImageOverlay}
        />

        <NavigationClient
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>
    </BackgroundGradientWrapper>
  );
}
