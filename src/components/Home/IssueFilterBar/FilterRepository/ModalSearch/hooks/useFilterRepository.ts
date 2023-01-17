import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { searchQueryState } from '@recoil/search';

function useFilterRepository() {
  const setQuery = useSetRecoilState(searchQueryState('repository'));
  const handleClose = useCallback(() => setQuery(''), [setQuery]);

  return handleClose;
}

export default useFilterRepository;
