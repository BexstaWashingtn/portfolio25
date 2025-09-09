import Link from "next/link";
import Inner from "../utils/Inner";
import styles from "./footer.module.css";

export default function SectionFooter() {
  return (
    <Inner variant='full' paddingTop='sm' paddingBottom='sm'>
      <div className={styles.footerText}>
        <p className={styles.footerTextCopyright}>
          © 2025 Thomas Badrow. Alle Rechte vorbehalten.
        </p>

        <div>
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

          {process.env.NEXT_PUBLIC_BUILT_AT && (
            <p>
              last build:{" "}
              {new Date(process.env.NEXT_PUBLIC_BUILT_AT).toLocaleString(
                "de-DE"
              )}
            </p>
          )}
        </div>
      </div>
    </Inner>
  );
}
