import type { Github } from 'src/types/github';
import { useInfiniteQuery } from '@tanstack/react-query';
import API from '@api/index';
import { GITHUB_ISSUE_PER_PAGE } from '@constants/github';

interface Params {
  params: Omit<Github.Params, 'page'> | null;
  enabled?: boolean;
}

function useIssues({ params, enabled = false }: Params) {
  return useInfiniteQuery(
    ['issue', params],
    ({ pageParam = 0 }) =>
      params ? API.GITHUB.findIssue({ ...params, page: pageParam + 1 }) : null,
    {
      enabled,
      keepPreviousData: true,
      staleTime: 60 * 1000,
      cacheTime: 3 * 60 * 1000,
      getNextPageParam: ({ total_count: totalCount }, { length }) =>
        length * GITHUB_ISSUE_PER_PAGE < totalCount ? length : undefined
    }
  );
}

export default useIssues;
