import { useRecoilCallback, useSetRecoilState } from 'recoil';
import { filterRepositoryState, filterState } from '@recoil/filter';

function useIssueFilter() {
  const setFilter = useSetRecoilState(filterState);

  const handleApply = useRecoilCallback(
    ({ snapshot }) =>
      async () => {
        const repositoryState = await snapshot.getPromise(
          filterRepositoryState
        );

        const repositories = repositoryState
          .filter(({ selected }) => selected)
          .map(({ owner, repo: repoName }) => `${owner}/${repoName}`);

        setFilter({ repositories });
      },
    []
  );

  return handleApply;
}

export default useIssueFilter;
