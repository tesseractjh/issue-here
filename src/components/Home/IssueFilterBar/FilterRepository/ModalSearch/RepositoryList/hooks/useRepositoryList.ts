import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { inputTextState } from '@recoil/input';
import useRepositories from '@hooks/queries/useRepositories';
import { getErrorType } from '@utils/error';

function useRepositoryList() {
  const query = useRecoilValue(inputTextState('repository'));
  const { data, isFetching, error, fetchNextPage } = useRepositories({
    params: { q: query },
    enabled: !!query
  });

  const errorType = getErrorType(error);

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
    errorType,
    handleIntersect
  };
}

export default useRepositoryList;
