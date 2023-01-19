import type { Github } from 'src/types/github';
import { useQuery } from '@tanstack/react-query';
import API from '@api/index';

interface Params {
  params: Github.Params;
  enabled?: boolean;
}

function useIssues({ params, enabled = false }: Params) {
  return useQuery(
    ['issue', params],
    () => API.GITHUB.findIssue({ ...params }),
    {
      enabled,
      keepPreviousData: true,
      staleTime: 60 * 1000,
      cacheTime: 3 * 60 * 1000
    }
  );
}

export default useIssues;
