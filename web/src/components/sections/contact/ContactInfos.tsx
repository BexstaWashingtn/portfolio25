import { FaGithub, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import styles from "./contact.module.css";
import { ContactData } from "@/types/shared/ConstactData";

type Props = {
  data: ContactData;
};

export default function ContactAddress({ data }: Props) {
  const { firstName, lastName, address, phone, email, github } = data;
  const { street, postalCode, city } = address;

  return (
    <address className={styles.contactDataWrapper}>
      <div className={styles.address}>
        {`${firstName} ${lastName}`}
        <br />
        {street}
        <br />
        {`${postalCode} ${city}`}
      </div>
      <div className={styles.contactDataGroup}>
        <p className={styles.contactDataGroupItem}>
          <FaWhatsapp />
          <a href={`tel:${phone}`}>{phone}</a>
        </p>
        <p className={styles.contactDataGroupItem}>
          <FaTelegramPlane />
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
      <div className={styles.contactDataGroup}>
        <p className={styles.contactDataGroupItem}>
          <FaGithub />
          <a target='_blank' href={github}>
            Github
          </a>
        </p>
      </div>
    </address>
  );
}
