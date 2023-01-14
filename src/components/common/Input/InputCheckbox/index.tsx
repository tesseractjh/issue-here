import styled, { css } from 'styled-components';
import { ReactComponent as CheckIcon } from '@assets/icons/check.svg';
import pxToRem from '@utils/pxToRem';

interface Props
  extends React.PropsWithChildren,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  id: string;
  size: 'small' | 'medium' | 'large';
}

const SmallStyle = css`
  gap: ${pxToRem(4)};
  padding: ${pxToRem(2)};
  font-size: ${pxToRem(14)};

  & .box {
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
  }
`;

const MediumStyle = css`
  gap: ${pxToRem(6)};
  padding: ${pxToRem(3)};
  font-size: ${pxToRem(16)};

  & .box {
    width: ${pxToRem(18)};
    height: ${pxToRem(18)};
  }
`;

const LargeStyle = css`
  gap: ${pxToRem(8)};
  padding: ${pxToRem(4)};
  font-size: ${pxToRem(18)};

  & .box {
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
  }
`;

const Container = styled.span`
  ${({ theme }) => theme.mixin.inlineFlex()}

  &.small {
    ${SmallStyle}
  }

  &.medium {
    ${MediumStyle}
  }

  &.large {
    ${LargeStyle}
  }

  &:hover .box {
    background-color: ${({ theme }) => theme.color.BLUE_LIGHT};

    & svg {
      fill: ${({ theme }) => theme.color.GRAY_DARK};
    }
  }

  &:active .box {
    background-color: ${({ theme }) => theme.color.BORDER_DARK};
  }
`;

const Input = styled.input`
  display: none;
`;

const CheckBox = styled.span<{ checked?: boolean }>`
  ${({ theme }) => theme.mixin.inlineFlex()};
  padding: ${pxToRem(2)};
  border: 1px solid ${({ theme }) => theme.color.BLUE_DARK};
  border-radius: ${pxToRem(4)};

  & svg {
    fill: ${({ theme }) => theme.color.GRAY_DARK};
  }

  ${({ checked, theme }) =>
    checked &&
    css`
      background-color: ${theme.color.BLUE};

      & svg {
        fill: ${theme.color.WHITE};
      }
    `}
`;

const Label = styled.label`
  user-select: none;
`;

function InputCheckbox({ id, size, children, checked, ...attributes }: Props) {
  return (
    <Container className={size}>
      <Input id={id} type="checkbox" checked={checked} {...attributes} />
      <CheckBox className="box" checked={checked}>
        <CheckIcon />
      </CheckBox>
      <Label htmlFor={id}>{children}</Label>
    </Container>
  );
}

export default InputCheckbox;
