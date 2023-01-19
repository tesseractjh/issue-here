import RadioFilter from '../RadioFilter';
import useFilterOrder from './hooks/useFilterOrder';

function FilterOrder() {
  const { curValue, setValue, handleClear } = useFilterOrder();

  return (
    <RadioFilter
      id="order"
      triggerContent="Order"
      onClear={handleClear}
      curValue={curValue}
      setValue={setValue}
      values={['asc', 'desc']}
      contents={['오름차순', '내림차순']}
    />
  );
}

export default FilterOrder;
