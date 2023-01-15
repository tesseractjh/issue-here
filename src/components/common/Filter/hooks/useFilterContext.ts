import { useContext } from 'react';
import FilterContext from '../FilterContext';

function useFilterContext() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error(
      'FilterContext는 Filter 컴포넌트 바깥에서 렌더될 수 없습니다!'
    );
  }

  return context;
}

export default useFilterContext;
