export function isArray<T>(value?: T | T[] | null): value is T[] {
  return value != null && Array.isArray(value);
}

export function isClient() {
  return typeof window !== 'undefined';
}
