import AsyncStorage from '@react-native-async-storage/async-storage';

export function createStorage(key: string) {
  return {
    clear() {
      AsyncStorage.removeItem(key);
    },
    get() {
      return AsyncStorage.getItem(key);
    },
    set(value: string) {
      AsyncStorage.setItem(key, value);
    },
  };
}
