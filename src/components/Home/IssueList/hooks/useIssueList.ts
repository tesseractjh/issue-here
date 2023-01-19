import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { filterState } from '@recoil/filter';
import useIssues from '@hooks/queries/useIssues';
import useComponentDidMount from '@hooks/useComponentDidMount';
import useIssueFilter from '@hooks/useIssueFilter';
import { getErrorType } from '@utils/error';
import { getQualifier } from '@utils/github';
import { GITHUB_MAXIMUM_RESULT } from '@constants/github';

function useIssueList() {
  const [page, setPage] = useState(1);
  const applyFilter = useIssueFilter();
  const filter = useRecoilValue(filterState);
  const q = getQualifier(filter);

  const { data, isFetching, error } = useIssues({
    params: { q, sort: filter.sort, page },
    enabled: !!q
  });

  const errorType = getErrorType(error);

  useComponentDidMount(applyFilter);

  useEffect(() => {
    setPage(1);
  }, [q]);

  return {
    issues: q && data?.items ? data.items : [],
    isFetching,
    errorType,
    totalCount:
      q && data?.total_count
        ? Math.min(data.total_count, GITHUB_MAXIMUM_RESULT)
        : 0,
    page,
    setPage
  };
}

export default useIssueList;
