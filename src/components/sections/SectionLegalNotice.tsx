import Link from "next/link";
import Inner from "../Inner";
import styles from "./SectionLegalNotice.module.css";

export default function SectionLegalNotice() {
  return (
    <Inner variant='full' paddingTop='sm' paddingBottom='sm'>
      <div className={styles.footerText}>
        <p className={styles.footerTextCopyright}>
          © 2025 Thomas Badrow. Alle Rechte vorbehalten.
        </p>

        <nav
          className={styles.footerTextNavigation}
          aria-label='Footernavigation'
        >
          <Link href='/' className={styles.footerTextContentLink}>
            Impressum
          </Link>
          <Link href='/' className={styles.footerTextContentLink}>
            Datenschutz
          </Link>
        </nav>
      </div>
    </Inner>
  );
}
