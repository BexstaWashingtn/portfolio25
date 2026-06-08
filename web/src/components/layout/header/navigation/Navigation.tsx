"use client";

import Link from "@ui/link/Link";
import styles from "./navigation.module.css";
import { useRouter } from "next/navigation";
import { MainNavigationItem } from "@/types/MainNavigation";
import useDocumentScrollLock from "@/lib/hooks/useDocumentScrollLock";

type Props = {
  setIsMobileMenuOpen: (isOpen: boolean) => void; // Function to set the mobile menu open state
  isMobileMenuOpen?: boolean; // Optional prop to indicate if the mobile menu is open
  activeSection: string | null; // The currently active section for highlighting
  mainNavigationDatas: MainNavigationItem[];
};

export default function Navigation({
  setIsMobileMenuOpen,
  isMobileMenuOpen,
  activeSection,
  mainNavigationDatas,
}: Props) {
  const router = useRouter();

  // scroll to Startpage Section
  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    router.push(`/#${sectionId}`);
  };

  // Prevents background scrolling when the mobile menu is open
  useDocumentScrollLock(!!isMobileMenuOpen);

  return (
    <nav
      className={styles.nav}
      aria-label='Hauptnavigation'
      id='main-navigation'
      data-open={isMobileMenuOpen}
    >
      <ul className={styles.navList}>
        {mainNavigationDatas.map(({ id, label }) => (
          <li key={id} className={styles.navListItem}>
            <Link
              className={`${styles.navLink} ${
                activeSection === id ? styles.active : ""
              }`}
              href={`/#${id}`}
              onClick={(e) => handleNavClick(e, id)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
