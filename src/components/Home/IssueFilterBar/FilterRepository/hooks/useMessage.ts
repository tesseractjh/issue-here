import { useRecoilValue } from 'recoil';
import { filterRepositoryState } from '@recoil/filter';

function useMessage() {
  const favorites = useRecoilValue(filterRepositoryState);
  return !favorites.length;
}

export default useMessage;
