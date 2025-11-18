"use client";

import Button from "@/components/ui/Button";
import { SrOnly } from "@/components/utils/a11y";
import Link from "next/link";
import styles from "./contact.module.css";

export default function ContactForm() {
  return (
    <div className={styles.form}>
      <form action='/api/contact' method='post' aria-describedby='privacy-note'>
        <div className={styles.wrapper}>
          <SrOnly>
            <legend>Kontaktformular</legend>
          </SrOnly>

          <div className={styles.field}>
            <label htmlFor='name' className={styles.label}>
              Vor- und Zuname
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Name'
              required
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor='email' className={styles.label}>
              E-Mail
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='E-Mail'
              required
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor='message' className={styles.label}>
              Deine Nachricht
            </label>
            <textarea
              id='message'
              name='message'
              placeholder='Nachricht'
              rows={8}
              required
              className={styles.textarea}
            ></textarea>
          </div>

          <p id='privacy-note' className={styles.privacyNote}>
            Hinweis zum Datenschutz: Die im Formular eingegebenen Daten werden
            ausschließlich zur Bearbeitung deiner Anfrage verwendet. Weitere
            Informationen findest du in der{" "}
            <Link href='/'>Datenschutzerklärung</Link>.
          </p>

          {/* TODO: connect Link to DSGVO Site */}

          <div className={styles.actions}>
            <Button type='submit'>Absenden</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
