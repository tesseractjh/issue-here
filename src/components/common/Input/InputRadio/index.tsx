import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';
import useRadio from './hooks/useRadio';

interface Props<T>
  extends React.PropsWithChildren,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value'> {
  size: 'small' | 'medium' | 'large';
  value: T;
  curValue: T;
  setValue: (value: T | ((prev: T) => T)) => void;
}

const SmallStyle = css`
  gap: ${pxToRem(4)};
  padding: ${pxToRem(2)};
  font-size: ${pxToRem(14)};

  & .radio {
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
  }
`;

const MediumStyle = css`
  gap: ${pxToRem(6)};
  padding: ${pxToRem(3)};
  font-size: ${pxToRem(16)};

  & .radio {
    width: ${pxToRem(18)};
    height: ${pxToRem(18)};
  }
`;

const LargeStyle = css`
  gap: ${pxToRem(8)};
  padding: ${pxToRem(4)};
  font-size: ${pxToRem(18)};

  & .radio {
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

  &:hover .radio {
    background-color: ${({ theme }) => theme.lightColor.BLUE_LIGHT};
  }

  &:active .radio {
    background-color: ${({ theme }) => theme.lightColor.BORDER_DARK};
  }
`;

const Radio = styled.span<{ checked?: boolean }>`
  overflow: hidden;
  position: relative;
  border: 1px solid ${({ theme }) => theme.lightColor.BLUE_DARK};
  border-radius: 50%;

  &::after {
    content: '';
    display: inline-block;
    ${({ theme }) => theme.placeholder.absoluteCenter}
    width: 75%;
    height: 75%;
    border-radius: 50%;
  }

  ${({ checked, theme }) =>
    checked &&
    css`
      &::after {
        background-color: ${theme.lightColor.BLUE};
      }
    `}
`;

function InputRadio<T>({
  size,
  name,
  value,
  curValue,
  setValue,
  children,
  ...attributes
}: Props<T>) {
  const { handleChange, handleKeyDown } = useRadio<T>({ value, setValue });
  const checked = curValue === value;

  return (
    <Container className={size}>
      <Radio className="radio" checked={checked} />
      {children}
      <input
        type="radio"
        className="sr-only"
        name={name}
        value={String(value)}
        checked={checked}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...attributes}
      />
    </Container>
  );
}

export default InputRadio;
