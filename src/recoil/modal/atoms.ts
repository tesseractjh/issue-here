import { atomFamily } from 'recoil';

export const modalState = atomFamily<boolean, string>({
  key: 'modalState',
  default: false
});
