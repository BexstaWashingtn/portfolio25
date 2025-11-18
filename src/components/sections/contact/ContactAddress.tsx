import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import styles from "./contact.module.css";

type ContactData = {
  name: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
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
      <li className={styles.adress}>
        {name}
        <br />
        {address.street}
        <br />
        {address.postalCode} {address.city}
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

      {/*
      <div className={styles.contactDataGroup}>
        <p className={styles.contactDataGroupLabel}>Socialmedia:</p>
        <ul className={styles.contactDataGroupIcons}>
          <li>
            <Link href='/'>
              <FaXing /> <SrOnly>Xing Profil</SrOnly>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <FaLinkedinIn /> <SrOnly>LinkedIn Profil</SrOnly>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <RiInstagramFill /> <SrOnly>Instagram Profil</SrOnly>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <FaXTwitter /> <SrOnly>X (Twitter) Profil</SrOnly>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <FaFacebook /> <SrOnly>Facebook Profil</SrOnly>
            </Link>
          </li>
        </ul>
      </div> */}
    </ul>
  );
}
