import { useRecoilCallback, useSetRecoilState } from 'recoil';
import {
  filterIssueStateState,
  filterRepositoryState,
  filterSortState,
  filterState
} from '@recoil/filter';

function useIssueFilter() {
  const setFilter = useSetRecoilState(filterState);

  const handleApply = useRecoilCallback(
    ({ snapshot }) =>
      async () => {
        const repositoryState = await snapshot.getPromise(
          filterRepositoryState
        );
        const issueStateState = await snapshot.getPromise(
          filterIssueStateState
        );
        const sortState = await snapshot.getPromise(filterSortState);

        const repo = repositoryState
          .filter(({ selected }) => selected)
          .map(({ owner, repo: repoName }) => `${owner}/${repoName}`);

        const state = Object.entries(issueStateState)
          .filter(([, value]) => value)
          .map(([key]) => key);

        setFilter({ repo, state, sort: sortState });
      },
    []
  );

  return handleApply;
}

export default useIssueFilter;
