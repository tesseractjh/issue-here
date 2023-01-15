import Button from '@components/common/Button';

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function ButtonClear({ onClick }: Props) {
  return (
    <Button size="medium" elementType="button" theme="gray" onClick={onClick}>
      초기화
    </Button>
  );
}

export default ButtonClear;
