import styles from "./header.module.css";
import HeaderLogo from "./HeaderLogo";
import NavigationClient from "../navigation/NavigationClient";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <HeaderLogo style={styles.logoImageOverlay} />

        <NavigationClient />
      </div>
    </header>
  );
}
