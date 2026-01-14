"use client";

import Button from "@/components/ui/Button";
import { SrOnly } from "@/components/utils/a11y";
import Link from "next/link";
import styles from "./contact.module.css";
import {
  contactFormSchema,
  type ContactFormData,
  MESSAGE_MIN_LENGTH,
  MESSAGE_MAX_LENGTH,
} from "@/lib/validation/contact";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiErrorWarningLine } from "react-icons/ri";
import { useState } from "react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setError,
    control,
    clearErrors,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const messageValue = useWatch({ control, name: "message" }) ?? "";
  const messageLength = messageValue.length;
  const charsToMin = Math.max(MESSAGE_MIN_LENGTH - messageLength, 0);
  const hasReachedMin = charsToMin === 0;
  const [generalMessage, setGeneralMessage] = useState<string | null>(null);
  const [generalType, setGeneralType] = useState<"success" | "error" | null>(
    null
  );

  const onSubmit = async (data: ContactFormData) => {
    setGeneralMessage(null);
    setGeneralType(null);
    clearErrors("root");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      // Validierungsfehler von der API
      if (!response.ok) {
        if (result.errors) {
          // result.errors ist ein Objekt: { name: [], email: [], message: [] }
          Object.entries(result.errors).forEach(([field, messages]) => {
            setError(field as keyof ContactFormData, {
              type: "server",
              message: (messages as string[]).join(" "),
            });
          });
        }

        setGeneralMessage(result.message ?? "Fehler beim Senden.");
        setGeneralType("error");
        return;
      }

      // Erfolgreich
      setGeneralMessage(result.message ?? "Nachricht erfolgreich gesendet!");
      setGeneralType("success");
      reset();

      // evtl. Success-Message setzen
    } catch (err) {
      console.log("Unerwarteter Fehler: ", err);
      // Unerwarteter Fehler
      setGeneralMessage(
        "Unerwarteter Serverfehler. Bitte später erneut versuchen."
      );
      setGeneralType("error");
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
            <div className={styles.fieldheader}>
              <label htmlFor='message' className={styles.label}>
                Nachricht
              </label>
              <span className={styles.headerMessage} aria-live='polite'>
                {!messageValue
                  ? ""
                  : !hasReachedMin
                  ? `${messageLength} / min. ${MESSAGE_MIN_LENGTH} Zeichen`
                  : `${messageValue.length} / max. ${MESSAGE_MAX_LENGTH} Zeichen`}
              </span>
            </div>

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

          {isSubmitSuccessful && (
            <p className={styles.success} aria-live='polite'>
              Formular wurde erfolgreich abgeschickt.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
