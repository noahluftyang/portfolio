export function numberToUnit(value: number | string) {
  if (typeof value === 'number') {
    return `${value}px`;
  }

  return value;
}
