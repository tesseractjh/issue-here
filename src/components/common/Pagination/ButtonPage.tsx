import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

interface Props extends React.PropsWithChildren {
  disabled?: boolean;
  isSelected?: boolean;
  onClick: React.MouseEventHandler;
}

const StyledButton = styled.button<{ isSelected?: boolean }>`
  ${({ theme }) => theme.mixin.inlineFlex()}
  width: ${pxToRem(36)};
  height: ${pxToRem(36)};
  border-radius: 50%;
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.color.GRAY_DARK};

  & > svg {
    fill: ${({ theme }) => theme.color.GRAY_DARK};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.HOVER_BACKGROUND};
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      font-weight: 700;

      &,
      &:hover {
        background-color: ${theme.color.POPUP_TEXT};
        color: ${theme.color.WHITE};

        & > svg {
          fill: ${theme.color.GRAY_DARK};
        }
      }
    `}

  ${({ theme }) =>
    theme.media.tablet(css`
      width: ${pxToRem(30)};
      height: ${pxToRem(30)};
      font-size: ${pxToRem(14)};
    `)}
`;

function ButtonPage({ disabled, isSelected, onClick, children }: Props) {
  return (
    <StyledButton disabled={disabled} isSelected={isSelected} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default ButtonPage;
