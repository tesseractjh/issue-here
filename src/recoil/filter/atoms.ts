import { atom } from 'recoil';
import { localStorageEffect } from '@utils/effect';

type RepositoryState = {
  owner: string;
  repo: string;
};

export const filterRepositoryState = atom<RepositoryState[]>({
  key: 'filterRepositoryState',
  default: JSON.parse(localStorage.getItem('filter_repository') ?? '[]'),
  effects: [
    localStorageEffect('filter_repository', (newValue) =>
      JSON.stringify(newValue)
    )
  ]
});
