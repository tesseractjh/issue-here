import styled, { css } from 'styled-components';
import { ReactComponent as CheckIcon } from '@assets/icons/check.svg';
import pxToRem from '@utils/pxToRem';
import useCheckbox from '../hooks/useCheckbox';

interface Props
  extends React.PropsWithChildren,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size: 'small' | 'medium' | 'large';
  setChecked: (value: boolean | ((prev: boolean) => boolean)) => void;
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

const Container = styled.label`
  ${({ theme }) => theme.mixin.inlineFlex()}
  position: relative;
  color: ${({ theme }) => theme.color.GRAY_DARK};
  user-select: none;

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
    background-color: ${({ theme }) => theme.lightColor.BLUE_LIGHT};

    & svg {
      fill: ${({ theme }) => theme.lightColor.GRAY_DARK};
    }
  }

  &:active .box {
    background-color: ${({ theme }) => theme.lightColor.BORDER_DARK};
  }
`;

const CheckBox = styled.span<{ checked?: boolean }>`
  ${({ theme }) => theme.mixin.inlineFlex()};
  padding: ${pxToRem(2)};
  border: 1px solid ${({ theme }) => theme.lightColor.BLUE_DARK};
  border-radius: ${pxToRem(4)};
  background-color: ${({ theme }) => theme.lightColor.BACKGROUND};

  & svg {
    visibility: hidden;
    fill: ${({ theme }) => theme.lightColor.WHITE};
  }

  ${({ checked, theme }) =>
    checked &&
    css`
      background-color: ${theme.lightColor.BLUE};

      & svg {
        visibility: visible;
      }
    `}
`;

function InputCheckbox({
  size,
  checked,
  setChecked,
  children,
  ...attributes
}: Props) {
  const { handleChange, handleKeyDown } = useCheckbox(setChecked);

  return (
    <Container className={size}>
      <CheckBox className="box" checked={checked}>
        <CheckIcon />
      </CheckBox>
      {children}
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...attributes}
      />
    </Container>
  );
}

export default InputCheckbox;
