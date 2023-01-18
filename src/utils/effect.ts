import type { AtomEffect } from 'recoil';

export const localStorageEffect =
  <T>(key: string, setValue?: (newValue: T) => string): AtomEffect<T> =>
  ({ onSet }) => {
    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(
          key,
          setValue ? setValue(newValue) : String(newValue)
        );
      }
    });
  };
