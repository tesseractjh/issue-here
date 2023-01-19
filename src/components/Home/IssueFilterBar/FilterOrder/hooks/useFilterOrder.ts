import { useRecoilState } from 'recoil';
import { filterOrderState } from '@recoil/filter';

function useFilterOrder() {
  const [curValue, setValue] = useRecoilState(filterOrderState);
  const handleClear = () => setValue('asc');

  return { curValue, setValue, handleClear };
}

export default useFilterOrder;
