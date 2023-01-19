import Button from '@components/common/Button';

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function ButtonClose({ onClick }: Props) {
  return (
    <Button size="medium" elementType="button" theme="gray" onClick={onClick}>
      닫기
    </Button>
  );
}

export default ButtonClose;
