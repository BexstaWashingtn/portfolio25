"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./sectionHeader.module.css";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useState } from "react";

export default function SectionHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <Link
            href='/'
            aria-current='page'
            onClick={() => setIsMobileMenuOpen(false)}
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
                className={styles.navLink}
                href='/'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Uber mich
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link
                className={styles.navLink}
                href='/'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projekte
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link
                className={styles.navLink}
                href='/'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Musik
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link
                className={styles.navLink}
                href='/'
                onClick={() => setIsMobileMenuOpen(false)}
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
    </header>
  );
}
