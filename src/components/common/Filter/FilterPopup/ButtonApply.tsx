import Button from '@components/common/Button';

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function ButtonApply({ onClick }: Props) {
  return (
    <Button
      size="medium"
      variant="contained"
      elementType="button"
      theme="normal"
      onClick={onClick}
    >
      적용
    </Button>
  );
}

export default ButtonApply;
