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

export const filterSortState = atom<Github.Sort>({
  key: 'filterSortState',
  default: (localStorage.getItem('filter_sort') ?? 'updated') as Github.Sort,
  effects: [localStorageEffect('filter_sort')]
});

export const filterOrderState = atom<Github.Order>({
  key: 'filterOrderState',
  default: (localStorage.getItem('filter_order') ?? 'asc') as Github.Order,
  effects: [localStorageEffect('filter_order')]
});

export const filterState = atom<FilterState>({
  key: 'filterState',
  default: { repo: [], state: [], sort: 'updated', order: 'asc' }
});
