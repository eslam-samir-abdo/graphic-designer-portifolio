// src/utils/date.js

// Birth date: April 7, 2000
const BIRTH_DATE = new Date(2000, 3, 7); // month is 0-indexed → 3 = April

export function getAge() {
  const today = new Date();
  let age = today.getFullYear() - BIRTH_DATE.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > BIRTH_DATE.getMonth() ||
    (today.getMonth() === BIRTH_DATE.getMonth() && today.getDate() >= BIRTH_DATE.getDate());
  if (!hasHadBirthdayThisYear) age--;
  return age;
}
