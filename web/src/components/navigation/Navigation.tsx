import Link from "@ui/link/Link";
import styles from "./navigation.module.css";
import { useEffect } from "react";

type Props = {
  setIsMobileMenuOpen: (isOpen: boolean) => void; // Function to set the mobile menu open state
  isMobileMenuOpen?: boolean; // Optional prop to indicate if the mobile menu is open
  activeSection: string | null; // The currently active section for highlighting
};

const navDatas = [
  {
    text: "Uber mich",
    slug: "about",
  },
  {
    text: "Typanalyse",
    slug: "type-analysis",
  },
  {
    text: "Arbeitsweise",
    slug: "working-method",
  },
  {
    text: "Skills",
    slug: "skills",
  },
  {
    text: "Projekte",
    slug: "projects",
  },
  {
    text: "Kontakt",
    slug: "contact",
  },
];

export default function Navigation({
  setIsMobileMenuOpen,
  isMobileMenuOpen,
  activeSection,
}: Props) {
  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const htmlEl = document.documentElement;
    htmlEl.classList.toggle("overflow-hidden", isMobileMenuOpen);
    return () => htmlEl.classList.remove("overflow-hidden");
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={styles.nav}
      aria-label='Hauptnavigation'
      id='main-navigation'
      data-open={isMobileMenuOpen}
    >
      <ul className={styles.navList}>
        {navDatas.map(({ text, slug }) => (
          <li key={slug} className={styles.navListItem}>
            <Link
              className={`${styles.navLink} ${
                activeSection === slug ? styles.active : ""
              }`}
              href={`#${slug}`}
              onClick={(e) => handleNavClick(e, slug)}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
