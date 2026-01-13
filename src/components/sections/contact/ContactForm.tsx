"use client";

import Button from "@/components/ui/Button";
import { SrOnly } from "@/components/utils/a11y";
import Link from "next/link";
import styles from "./contact.module.css";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validation/contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiErrorWarningLine } from "react-icons/ri";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
    clearErrors,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    clearErrors("root");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        setError("root.server", {
          type: "server",
          message:
            "Beim Senden ist ein Fehler aufgetreten. Bitte versuche es später erneut.",
        });
        return;
      }

      reset();

      // evtl. Success-Message setzen
    } catch (error) {
      setError("root.server", {
        type: "server",
        message:
          error instanceof TypeError
            ? "Der Server ist nicht erreichbar."
            : "Es ist ein unbekannter Fehler aufgetreten.",
      });
    }
  };

  return (
    <div className={styles.form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        aria-describedby='privacy-note'
        noValidate
      >
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
              placeholder='Name'
              required
              className={styles.input}
              {...register("name")}
              aria-invalid={!!errors.name || undefined}
              aria-describedby={errors.name ? "name-error" : undefined}
            />

            {errors.name && (
              <p id='name-error' role='alert' className={styles.error}>
                {errors.name.message}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor='email' className={styles.label}>
              E-Mail
            </label>

            <input
              type='email'
              id='email'
              placeholder='E-Mail'
              required
              className={styles.input}
              {...register("email")}
              aria-invalid={!!errors.email || undefined}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id='email-error' role='alert' className={styles.error}>
                {errors.email.message}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor='message' className={styles.label}>
              Deine Nachricht
            </label>

            <textarea
              id='message'
              placeholder='Nachricht'
              rows={8}
              required
              className={styles.textarea}
              {...register("message")}
              aria-invalid={!!errors.message || undefined}
              aria-describedby={errors.message ? "message-error" : undefined}
            ></textarea>
            {errors.message && (
              <p id='message-error' role='alert' className={styles.error}>
                {errors.message.message}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <input
              type='text'
              tabIndex={-1}
              aria-hidden='true'
              autoComplete='off'
              style={{ display: "none" }}
              {...register("hpot")}
            />
          </div>

          <p id='privacy-note' className={styles.privacyNote}>
            Hinweis zum Datenschutz: Die im Formular eingegebenen Daten werden
            ausschließlich zur Bearbeitung deiner Anfrage verwendet. Weitere
            Informationen findest du in der{" "}
            <Link href='/'>Datenschutzerklärung</Link>.
          </p>

          {/* TODO: connect Link to DSGVO Site */}

          {errors.root?.server && (
            <div className={styles.serverError}>
              <RiErrorWarningLine className={styles.icon} />
              <p role='alert' className={styles.message}>
                {errors.root.server.message}
              </p>
            </div>
          )}

          <div className={styles.actions}>
            <Button type='submit' disabled={isSubmitting}>
              {isSubmitting ? "sendet .." : "Absenden"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
