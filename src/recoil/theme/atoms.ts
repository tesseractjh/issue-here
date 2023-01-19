import { atom } from 'recoil';
import { localStorageEffect } from '@utils/effect';

const getTheme = () => (localStorage.getItem('theme') ?? 'light') as Theme;

export const themeState = atom<boolean>({
  key: 'themeState',
  default: getTheme() === 'dark',
  effects: [
    localStorageEffect('theme', (newValue) => (newValue ? 'dark' : 'light'))
  ]
});
