import { atomFamily } from 'recoil';

export const searchQueryState = atomFamily<string, string>({
  key: 'searchQueryState',
  default: ''
});
