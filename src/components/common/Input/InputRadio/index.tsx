import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';
import useRadio from './hooks/useRadio';

interface Props
  extends React.PropsWithChildren,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value'> {
  size: 'small' | 'medium' | 'large';
  value: string;
  curValue: string;
  setValue: (value: string | ((prev: string) => string)) => void;
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
    background-color: ${({ theme }) => theme.color.BLUE_LIGHT};
  }

  &:active .radio {
    background-color: ${({ theme }) => theme.color.BORDER_DARK};
  }
`;

const Radio = styled.span<{ checked?: boolean }>`
  ${({ theme }) => theme.mixin.inlineFlex()}
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.color.BLUE_DARK};
  border-radius: 50%;

  &::after {
    content: '';
    display: inline-block;
    width: 75%;
    height: 75%;
    border-radius: 50%;
  }

  ${({ checked, theme }) =>
    checked &&
    css`
      &::after {
        background-color: ${theme.color.BLUE};
      }
    `}
`;

function InputRadio({
  size,
  name,
  value,
  curValue,
  setValue,
  children,
  ...attributes
}: Props) {
  const { handleChange, handleKeyDown } = useRadio({ value, setValue });
  const checked = curValue === value;

  return (
    <Container className={size}>
      <Radio className="radio" checked={checked} />
      {children}
      <input
        type="radio"
        className="sr-only"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...attributes}
      />
    </Container>
  );
}

export default InputRadio;
