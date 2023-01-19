import { useSetRecoilState } from 'recoil';
import { modalState } from '@recoil/modal';

function useButtonSearch() {
  const setIsOpen = useSetRecoilState(modalState('searchRepository'));

  const handleClick = () => setIsOpen((prev) => !prev);

  return handleClick;
}

export default useButtonSearch;
