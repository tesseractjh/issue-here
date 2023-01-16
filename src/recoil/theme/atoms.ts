import type { AtomEffect } from 'recoil';
import { atom } from 'recoil';

const getTheme = () => (localStorage.getItem('theme') ?? 'light') as Theme;

const localStorageEffect =
  (key: string): AtomEffect<boolean> =>
  ({ onSet }) => {
    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, newValue ? 'dark' : 'light');
      }
    });
  };

export const themeState = atom<boolean>({
  key: 'themeState',
  default: getTheme() === 'dark',
  effects: [localStorageEffect('theme')]
});
