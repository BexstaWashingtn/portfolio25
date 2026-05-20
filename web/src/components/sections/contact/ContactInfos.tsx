import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import styles from "./contact.module.css";

type ContactData = {
  name: string;
  address: {
    street: string;
    state: string;
    postalcode: string;
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
    <address className={styles.contactDataWrapper}>
      <div className={styles.address}>
        {name}
        <br />
        {address.street}
        <br />
        {`${address.postalcode} ${address.state}`}
      </div>
      <div className={styles.contactDataGroup}>
        <p className={styles.contactDataGroupItem}>
          <FaWhatsapp />
          <a href={`tel:${phone.value}`}>{phone.display}</a>
        </p>
        <p className={styles.contactDataGroupItem}>
          <FaTelegramPlane />
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </address>
  );
}
