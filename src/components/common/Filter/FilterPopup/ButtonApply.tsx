import Button from '@components/common/Button';
import useFilterContext from '../hooks/useFilterContext';

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function ButtonApply({ onClick }: Props) {
  const { setIsOpen } = useFilterContext();

  return (
    <Button
      size="medium"
      variant="contained"
      elementType="button"
      theme="normal"
      onClick={(event) => {
        onClick(event);
        setIsOpen(false);
      }}
    >
      적용
    </Button>
  );
}

export default ButtonApply;
