export function calculateAgeFromString(
  birthDate: string,
  referenceDate: Date = new Date(),
): number {
  const [dayStr, monthStr, yearStr] = birthDate.split(".");

  const day = Number(dayStr);
  const month = Number(monthStr);
  const year = Number(yearStr);

  if (
    !Number.isInteger(day) ||
    !Number.isInteger(month) ||
    !Number.isInteger(year)
  ) {
    throw new Error(`Invalid birthDate format: "${birthDate}"`);
  }

  const currentYear = referenceDate.getFullYear();

  const birthdayThisYear = new Date(currentYear, month - 1, day);

  let age = currentYear - year;

  if (referenceDate < birthdayThisYear) {
    age -= 1;
  }

  return age;
}
