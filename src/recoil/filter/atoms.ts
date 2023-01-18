import type { Github } from 'src/types/github';
import { atom } from 'recoil';
import { localStorageEffect } from '@utils/effect';

export type FilterRepositoryState = {
  ownerId: number;
  owner: string;
  repo: string;
  selected: boolean;
};

export type FilterState = Omit<Github.ParamsIssue, 'page'>;

export const filterRepositoryState = atom<FilterRepositoryState[]>({
  key: 'filterRepositoryState',
  default: JSON.parse(localStorage.getItem('filter_repository') ?? '[]'),
  effects: [
    localStorageEffect('filter_repository', (newValue) =>
      JSON.stringify(newValue)
    )
  ]
});

export const filterState = atom<FilterState | null>({
  key: 'filterState',
  default: null
});
