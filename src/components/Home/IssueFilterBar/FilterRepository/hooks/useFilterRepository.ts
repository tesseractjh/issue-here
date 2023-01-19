import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { filterRepositoryState } from '@recoil/filter';
import { inputTextState } from '@recoil/input';

function useFilterRepository() {
  const setQuery = useSetRecoilState(inputTextState('repository'));
  const setFilter = useSetRecoilState(filterRepositoryState);

  const handleClear = () => setFilter([]);
  const handleClose = useCallback(() => setQuery(''), [setQuery]);

  return { handleClear, handleClose };
}

export default useFilterRepository;
