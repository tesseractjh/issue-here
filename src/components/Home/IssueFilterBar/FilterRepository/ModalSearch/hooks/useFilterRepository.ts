import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { filterRepositoryState } from '@recoil/filter';
import { searchQueryState } from '@recoil/search';

function useFilterRepository() {
  const setQuery = useSetRecoilState(searchQueryState('repository'));
  const setFilter = useSetRecoilState(filterRepositoryState);

  const handleClear = () => setFilter([]);
  const handleClose = useCallback(() => setQuery(''), [setQuery]);

  return { handleClear, handleClose };
}

export default useFilterRepository;
