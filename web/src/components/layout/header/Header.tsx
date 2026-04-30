import styles from "./header.module.css";
import HeaderClient from "./HeaderClient";

export default function Header() {
  return (
    <header className={styles.header}>
      <HeaderClient styles={styles} />
    </header>
  );
}
