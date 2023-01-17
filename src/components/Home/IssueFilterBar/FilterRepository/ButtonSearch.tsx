import Button from '@components/common/Button';
import useButtonSearch from './hooks/useButtonSearch';

function ButtonSearch() {
  const handleClick = useButtonSearch();

  return (
    <Button
      size="medium"
      variant="contained"
      elementType="button"
      theme="normal"
      onClick={handleClick}
    >
      Repository 검색
    </Button>
  );
}

export default ButtonSearch;
