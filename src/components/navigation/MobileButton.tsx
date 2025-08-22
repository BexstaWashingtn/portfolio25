import { IoMdClose, IoMdMenu } from "react-icons/io";
import styles from "./mobileButton.module.css";

type Props = {
  handleMenuToggle: () => void; // Function to toggle the mobile menu
  isMobileMenuOpen: boolean; // State to check if the mobile menu is open
};

export default function MobileButton({
  handleMenuToggle,
  isMobileMenuOpen,
}: Props) {
  return (
    <div className={styles.headerMobileCon}>
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
  );
}
