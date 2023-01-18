import { useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modalState } from '@recoil/modal';
import { searchQueryState } from '@recoil/search';

function useModalSearch() {
  const setQuery = useSetRecoilState(searchQueryState('repository'));
  const [isOpen, setIsOpen] = useRecoilState(modalState('searchRepository'));
  const onClose = useCallback(() => setQuery(''), [setQuery]);

  return { name: 'Repository 검색', isOpen, setIsOpen, onClose };
}

export default useModalSearch;
