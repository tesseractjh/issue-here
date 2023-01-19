import RadioFilter from '../RadioFilter';
import useFilterSort from './hooks/useFilterSort';

function FilterSort() {
  const { curValue, setValue, handleClear } = useFilterSort();

  return (
    <RadioFilter
      id="sort"
      triggerContent="Sort"
      onClear={handleClear}
      curValue={curValue}
      setValue={setValue}
      values={['updated', 'created', 'comments']}
      contents={['업데이트', '작성 시간', '댓글 수']}
    />
  );
}

export default FilterSort;
