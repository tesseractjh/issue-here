import type { Github } from 'src/types/github';
import { atom } from 'recoil';
import { localStorageEffect } from '@utils/effect';

export type FilterRepositoryState = {
  ownerId: number;
  owner: string;
  repo: string;
  selected: boolean;
};

export type FilterState = Omit<Github.IssueFilter, 'page'>;
export type FilterIssueStateState = Record<string, boolean>;

export const filterRepositoryState = atom<FilterRepositoryState[]>({
  key: 'filterRepositoryState',
  default: JSON.parse(localStorage.getItem('filter_repository') ?? '[]'),
  effects: [
    localStorageEffect('filter_repository', (newValue) =>
      JSON.stringify(newValue)
    )
  ]
});

export const filterIssueStateState = atom<FilterIssueStateState>({
  key: 'filterIssueStateState',
  default: JSON.parse(localStorage.getItem('filter_state') ?? 'null') ?? {
    open: true
  },
  effects: [
    localStorageEffect('filter_state', (newValue) => JSON.stringify(newValue))
  ]
});

export const filterState = atom<FilterState>({
  key: 'filterState',
  default: { repo: [], state: [] }
});
