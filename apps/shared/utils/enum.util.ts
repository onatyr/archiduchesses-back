export function getOrdinal<T extends object>(enumClass: T, value: T[keyof T]): number {
  return Object.values(enumClass).indexOf(value);
}