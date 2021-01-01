import { atom, DefaultValue, useRecoilState } from 'recoil';
import { createStorage } from 'utils/storage';

const key = '@portfolio/chatting/auth-token' as const;

const storage = createStorage(key);

function localStorageEffect({ onSet, setSelf }) {
  const savedValue = storage.get();

  if (savedValue != null) {
    setSelf(savedValue);
  }

  onSet(newValue => {
    if (newValue instanceof DefaultValue) {
      storage.clear();
    } else {
      storage.set(newValue);
    }
  });
}

const authTokenAtom = atom({
  default: storage.get(),
  effects_UNSTABLE: [localStorageEffect],
  key,
});

export function useAuthToken() {
  return useRecoilState(authTokenAtom);
}
