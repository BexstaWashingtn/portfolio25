import { fallbackProfile } from "./fallbackProfile";

export function getProfileData() {
  return {
    firstname:
      process.env.NEXT_PUBLIC_CONTACT_FIRSTNAME ?? fallbackProfile.firstname,
    lastname:
      process.env.NEXT_PUBLIC_CONTACT_LASTNAME ?? fallbackProfile.lastname,
    street: process.env.NEXT_PUBLIC_CONTACT_STREET ?? fallbackProfile.street,
    state: process.env.NEXT_PUBLIC_CONTACT_STATE ?? fallbackProfile.state,
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? fallbackProfile.phone,
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? fallbackProfile.email,
  };
}
