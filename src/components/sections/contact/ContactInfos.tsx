import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import styles from "./contact.module.css";
import Logo from "@/components/ui/Logo";

type ContactData = {
  name: string;
  address: {
    street: string;
    state: string;
  };
  phone: {
    display: string;
    value: string; // für tel:
  };
  email: string;
};

type ContactProps = {
  contactData: ContactData;
};

export default function ContactAddress({ contactData }: ContactProps) {
  const { name, address, phone, email } = contactData;

  return (
    <ul className={styles.contactDataWrapper}>
      <li>
        <Logo width={68} height={100} linkDisabled={true} />
      </li>

      <li className={styles.adress}>
        {name}
        <br />
        {address.street}
        <br />
        {address.state}
      </li>
      <li className={styles.contactDataGroup}>
        <p className={styles.contactDataGroupItem}>
          <FaWhatsapp />
          <a href={`tel:${phone.value}`}>{phone.display}</a>
        </p>
        <p className={styles.contactDataGroupItem}>
          <FaTelegramPlane />
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </li>
    </ul>
  );
}
