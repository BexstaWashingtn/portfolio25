import { getProfileData } from "./getProfileData";

export function getProfileFullName() {
  const profile = getProfileData();

  return `${profile.firstname} ${profile.lastname}`;
}
