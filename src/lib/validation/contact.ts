import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name muss mindestens 3 Zeichen lang sein" })
    .max(50, { message: "Name darf maximal 50 Zeichen haben" })
    .trim(),

  email: z
    .string()
    .email({ message: "Bitte eine gültige E-Mail-Adresse eingeben" })
    .trim(),

  message: z
    .string()
    .min(20, { message: "Die Nachricht muss mindestens 20 Zeichen enthalten" })
    .max(2000, { message: "Die Nachricht darf maximal 2000 Zeichen enthalten" })
    .trim(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
