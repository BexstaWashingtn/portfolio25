import styles from "./header.module.css";
import HeaderClient from "./HeaderClient";
import type { HeaderDatas } from "@/types/MainNavigation";

export default function Header({ data }: { data: HeaderDatas }) {
  return (
    <header className={styles.header}>
      <HeaderClient styles={styles} headerDatas={data} />
    </header>
  );
}
