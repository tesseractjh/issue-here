import { useRecoilValue } from 'recoil';
import { filterState } from '@recoil/filter';
import useIssues from '@hooks/queries/useIssues';
import useComponentDidMount from '@hooks/useComponentDidMount';
import useIssueFilter from '@hooks/useIssueFilter';
import useParams from './useParams';

function useIssueList() {
  const applyFilter = useIssueFilter();
  const filter = useRecoilValue(filterState);
  const params = useParams(filter);
  const { data, isFetching } = useIssues({ params, enabled: !!params });

  useComponentDidMount(applyFilter);

  return {
    issues: data?.pages.flatMap(({ items }) => items) ?? [],
    isFetching
  };
}

export default useIssueList;
