import type { Github } from 'src/types/github';
import { useInfiniteQuery } from '@tanstack/react-query';
import API from '@api/index';
import { GITHUB_REPOSITORY_PER_PAGE } from '@constants/github';

interface Params {
  params: Omit<Github.Params, 'page' | 'sort' | 'order'>;
  enabled?: boolean;
}

function useRepositories({ params, enabled = false }: Params) {
  return useInfiniteQuery(
    ['repository', params],
    ({ pageParam = 0 }) =>
      API.GITHUB.findRepoByName({ ...params, page: pageParam + 1 }),
    {
      enabled,
      staleTime: 15 * 1000,
      cacheTime: 60 * 1000,
      getNextPageParam: ({ total_count: totalCount }, { length }) =>
        length * GITHUB_REPOSITORY_PER_PAGE < totalCount ? length : undefined
    }
  );
}

export default useRepositories;
