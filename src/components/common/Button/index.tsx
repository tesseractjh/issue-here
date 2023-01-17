import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';
import THEMES_BUTTON from './constants/themes';

interface ButtonPropsBase extends React.PropsWithChildren {
  size: 'small' | 'medium' | 'large';
  variant?: 'contained' | 'outlined';
  theme: keyof typeof THEMES_BUTTON;
}

interface ButtonProps
  extends ButtonPropsBase,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  elementType: 'button';
}

interface AnchorProps
  extends ButtonPropsBase,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  elementType: 'anchor';
}

type Props = ButtonProps | AnchorProps;

const SmallStyle = css`
  padding: ${pxToRem(8, 12)};
  border-radius: ${pxToRem(4)};
  font-size: ${pxToRem(14)};
`;

const MediumStyle = css`
  padding: ${pxToRem(10, 15)};
  border-radius: ${pxToRem(5)};
  font-size: ${pxToRem(16)};
`;

const LargeStyle = css`
  padding: ${pxToRem(12, 18)};
  border-radius: ${pxToRem(6)};
  font-size: ${pxToRem(18)};
`;

const StyledButton = styled.button<{ colorTheme: ButtonPropsBase['theme'] }>`
  display: inline-block;
  background-color: ${({ theme }) => theme.lightColor.BACKGROUND};
  color: ${({ theme }) => theme.lightColor.GRAY_DARK};
  white-space: nowrap;
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

  &:hover {
    background-color: ${({ colorTheme, theme }) =>
      theme.lightColor[THEMES_BUTTON[colorTheme].hoverBackground[1]]};
  }

  &.contained {
    background-color: ${({ colorTheme, theme }) =>
      theme.lightColor[THEMES_BUTTON[colorTheme].background[0]]};

    color: ${({ colorTheme, theme }) =>
      theme.lightColor[THEMES_BUTTON[colorTheme].text[0]]};

    &:hover {
      background-color: ${({ colorTheme, theme }) =>
        theme.lightColor[THEMES_BUTTON[colorTheme].hoverBackground[0]]};
    }
  }

  &.outlined {
    border: 1px solid
      ${({ colorTheme, theme }) =>
        theme.lightColor[THEMES_BUTTON[colorTheme].border]};

    color: ${({ colorTheme, theme }) =>
      theme.lightColor[THEMES_BUTTON[colorTheme].text[1]]};
  }

  &:disabled {
    border: none;
    background-color: ${({ theme }) => theme.lightColor.INACTIVE};
    color: ${({ theme }) => theme.lightColor.WHITE};
    cursor: not-allowed;

    &:hover {
      background-color: ${({ theme }) => theme.lightColor.INACTIVE};
    }
  }
`;

function Button(props: Props) {
  if (props.elementType === 'button') {
    const { size, variant, theme, elementType, ...attributes } = props;
    return (
      <StyledButton
        className={`${size} ${variant ?? ''}`}
        colorTheme={theme}
        type="button"
        {...attributes}
      >
        {props.children}
      </StyledButton>
    );
  }

  const { size, variant, theme, elementType, ...attributes } = props;
  return (
    <StyledButton
      as="a"
      className={`${size} ${variant ?? ''}`}
      colorTheme={theme}
      {...attributes}
    >
      {props.children}
    </StyledButton>
  );
}

export default Button;
