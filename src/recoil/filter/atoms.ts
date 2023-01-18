import { atom } from 'recoil';
import { localStorageEffect } from '@utils/effect';

export type FilterRepositoryState = {
  ownerId: number;
  owner: string;
  repo: string;
  selected: boolean;
};

export const filterRepositoryState = atom<FilterRepositoryState[]>({
  key: 'filterRepositoryState',
  default: JSON.parse(localStorage.getItem('filter_repository') ?? '[]'),
  effects: [
    localStorageEffect('filter_repository', (newValue) =>
      JSON.stringify(newValue)
    )
  ]
});
