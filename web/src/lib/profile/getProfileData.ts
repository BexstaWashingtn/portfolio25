import { fallbackProfile } from "./fallbackProfile";

export function getProfileData() {
  return {
    firstname:
      process.env.NEXT_PUBLIC_PROFILE_FIRSTNAME ?? fallbackProfile.firstname,
    lastname:
      process.env.NEXT_PUBLIC_PROFILE_LASTNAME ?? fallbackProfile.lastname,
    street: process.env.NEXT_PUBLIC_PROFILE_STREET ?? fallbackProfile.street,
    state: process.env.NEXT_PUBLIC_PROFILE_STATE ?? fallbackProfile.state,
    postalcode:
      process.env.NEXT_PUBLIC_PROFILE_POSTALCODE ?? fallbackProfile.postalcode,
    phone: process.env.NEXT_PUBLIC_PROFILE_PHONE ?? fallbackProfile.phone,
    email: process.env.NEXT_PUBLIC_PROFILE_EMAIL ?? fallbackProfile.email,
    bday: process.env.NEXT_PUBLIC_PROFILE_BDAY ?? fallbackProfile.bday,
  };
}
