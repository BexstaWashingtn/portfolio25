import { z } from "zod";

export const MESSAGE_MIN_LENGTH = 20;
export const MESSAGE_MAX_LENGTH = 2000;

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
    .min(
      MESSAGE_MIN_LENGTH,
      `Deine Nachricht sollte mindestens ${MESSAGE_MIN_LENGTH} Zeichen enthalten.`
    )
    .max(
      MESSAGE_MAX_LENGTH,
      `Die Nachricht darf maximal ${MESSAGE_MAX_LENGTH} Zeichen lang sein.`
    ),
  hpot: z
    .string()
    .optional()
    .refine((val) => val === "" || val === undefined, {
      message: "Bot detected",
    }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
