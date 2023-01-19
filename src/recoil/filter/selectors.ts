import type { FilterRepositoryState } from './atoms';
import { selectorFamily } from 'recoil';
import { filterRepositoryState } from './atoms';

export const repositorySelectedState = selectorFamily<
  boolean,
  Pick<FilterRepositoryState, 'owner' | 'repo'>
>({
  key: 'repositorySelectedState',
  get:
    ({ owner: curOwner, repo: curRepo }) =>
    ({ get }) => {
      const repos = get(filterRepositoryState);
      const targetRepo = repos.find(
        ({ owner, repo }) => owner === curOwner && repo === curRepo
      );

      return targetRepo?.selected ?? false;
    },
  set:
    ({ owner: curOwner, repo: curRepo }) =>
    ({ set }, newValue) => {
      set(filterRepositoryState, (prev) => {
        const selected = Boolean(newValue);
        const index = prev.findIndex(
          ({ owner, repo }) => owner === curOwner && repo === curRepo
        );

        return [
          ...prev.slice(0, index),
          { ...prev[index], selected },
          ...prev.slice(index + 1)
        ];
      });
    }
});
