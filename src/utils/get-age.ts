export function getAge(birthDay: string): number {
  if (!birthDay) return;
  try {
    const age = Date.now() - (new Date(birthDay)).getTime();
    return Math.abs((new Date(age)).getUTCFullYear() - 1970);
  } catch {
    return;
  }
}