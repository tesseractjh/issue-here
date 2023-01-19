import { useRecoilState } from 'recoil';
import { filterSortState } from '@recoil/filter';

function useFilterSort() {
  const [curValue, setValue] = useRecoilState(filterSortState);
  const handleClear = () => setValue('updated');

  return { curValue, setValue, handleClear };
}

export default useFilterSort;
