import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .refine((value) => value.trim().includes(" "), {
      message: "Bitte gib Vor- und Nachnamen ein.",
    })
    .refine(
      (value) =>
        value
          .trim()
          .split(/\s+/) // in Wörter aufteilen (beliebige Abstände)
          .every((word) => word.length >= 2), // jedes Wort >= 2 Zeichen
      {
        message: "Jeder Name muss mindestens 2 Buchstaben enthalten.",
      }
    ),

  email: z
    .string()
    .email({ message: "Bitte eine gültige E-Mail-Adresse eingeben" })
    .trim(),

  message: z
    .string()
    .min(20, { message: "Die Nachricht muss mindestens 20 Zeichen enthalten" })
    .max(2000, { message: "Die Nachricht darf maximal 2000 Zeichen enthalten" })
    .trim(),
  hpot: z
    .string()
    .optional()
    .refine((val) => val === "" || val === undefined, {
      message: "Bot detected",
    }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
