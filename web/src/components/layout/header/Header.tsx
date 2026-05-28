import { getMainNavigation } from "@/sanity/fetchMainNavigation";
import styles from "./header.module.css";
import HeaderClient from "./HeaderClient";
import {
  MainNavigationItem,
  MainNavigationQueryResult,
} from "@/types/navigation";

export default async function Header() {
  const sanityMainNavigation = await getMainNavigation();
  const mainNavigationDatas = mapMainNavigationDatas(sanityMainNavigation);

  return (
    <header className={styles.header}>
      <HeaderClient styles={styles} mainNavigationDatas={mainNavigationDatas} />
    </header>
  );
}

function isMainNavigationItem(
  item: MainNavigationItem | null,
): item is MainNavigationItem {
  return item !== null;
}

function mapMainNavigationDatas(
  data: MainNavigationQueryResult,
): MainNavigationItem[] {
  return data?.navigation?.filter(isMainNavigationItem) ?? [];
}
