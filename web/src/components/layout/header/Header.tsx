import styles from "./header.module.css";
import HeaderClient from "./HeaderClient";
import type { HeaderData } from "@/types/MainNavigation";

export default function Header({ data }: { data: HeaderData }) {
  return (
    <header className={styles.header}>
      <HeaderClient styles={styles} headerData={data} />
    </header>
  );
}
