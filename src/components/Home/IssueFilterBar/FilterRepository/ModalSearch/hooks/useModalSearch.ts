import { useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { inputTextState } from '@recoil/input';
import { modalState } from '@recoil/modal';

function useModalSearch() {
  const setQuery = useSetRecoilState(inputTextState('repository'));
  const [isOpen, setIsOpen] = useRecoilState(modalState('searchRepository'));
  const onClose = useCallback(() => setQuery(''), [setQuery]);

  return { name: 'Repository 검색', isOpen, setIsOpen, onClose };
}

export default useModalSearch;
