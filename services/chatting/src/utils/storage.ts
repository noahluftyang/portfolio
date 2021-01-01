import { isClient } from './isClient';

let storage: Storage | undefined;

export function createStorage(key: string) {
  if (isClient()) {
    storage = localStorage;
  }

  return {
    clear() {
      storage?.removeItem(key);
    },
    get() {
      return storage?.getItem(key);
    },
    set(value: Record<string, unknown> | string) {
      storage?.setItem(key, JSON.stringify(value));
    },
  };
}
