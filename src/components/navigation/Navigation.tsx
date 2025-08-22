import Link from "next/link";
import styles from "./Navigation.module.css";

type Props = {
  setIsMobileMenuOpen: (isOpen: boolean) => void; // Function to set the mobile menu open state
  isMobileMenuOpen?: boolean; // Optional prop to indicate if the mobile menu is open
  activeSection: string | null; // The currently active section for highlighting
};

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

  return (
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
            onClick={(e) => handleNavClick(e, "about")}
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
            onClick={(e) => handleNavClick(e, "projects")}
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
            onClick={(e) => handleNavClick(e, "music")}
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
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
