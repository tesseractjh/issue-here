import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size: 'small' | 'medium' | 'large';
  variant?: 'outlined';
}

const SmallStyle = css`
  padding: ${pxToRem(4, 6)};
  border-radius: ${pxToRem(4)};
  font-size: ${pxToRem(14)};
`;

const MediumStyle = css`
  padding: ${pxToRem(6, 9)};
  border-radius: ${pxToRem(5)};
  font-size: ${pxToRem(16)};
`;

const LargeStyle = css`
  padding: ${pxToRem(8, 12)};
  border-radius: ${pxToRem(6)};
  font-size: ${pxToRem(18)};
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.lightColor.BACKGROUND};

  &.small {
    ${SmallStyle}
  }

  &.medium {
    ${MediumStyle}
  }

  &.large {
    ${LargeStyle}
  }

  &.outlined {
    border: 2px solid ${({ theme }) => theme.color.BLUE_DARK};
  }
`;

function InputText({ size, variant, ...attributes }: Props) {
  return <Input className={`${size} ${variant ?? ''}`} {...attributes} />;
}

export default InputText;
