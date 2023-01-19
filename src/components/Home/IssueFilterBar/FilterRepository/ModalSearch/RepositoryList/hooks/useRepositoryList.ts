import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { inputTextState } from '@recoil/input';
import useRepositories from '@hooks/queries/useRepositories';

function useRepositoryList() {
  const query = useRecoilValue(inputTextState('repository'));
  const { data, isFetching, fetchNextPage } = useRepositories({
    params: { q: query },
    enabled: !!query
  });

  const handleIntersect = useCallback(async () => {
    const result = await fetchNextPage();
    return result;
  }, [fetchNextPage]);

  return {
    query,
    data:
      data?.pages
        .flatMap(({ items }) => items)
        .filter(
          (item, _, arr) =>
            !arr.find(
              (otherItem) =>
                item !== otherItem && item.full_name === otherItem.full_name
            )
        ) ?? [],
    isFetching,
    handleIntersect
  };
}

export default useRepositoryList;
