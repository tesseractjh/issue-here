import styled, { css } from 'styled-components';
import usePreventScroll from '@hooks/usePreventScroll';
import pxToRem from '@utils/pxToRem';
import ButtonApply from './ButtonApply';
import ButtonClear from './ButtonClear';
import ButtonClose from './ButtonClose';
import useFilterContext from '../hooks/useFilterContext';
import usePopup from '../hooks/usePopup';

interface Props extends React.PropsWithChildren {
  onClear: React.ComponentProps<typeof ButtonClear>['onClick'];
  onApply: React.ComponentProps<typeof ButtonApply>['onClick'];
}

const Container = styled.div`
  overflow: hidden;
  position: absolute;
  top: calc(100% + ${pxToRem(4)});
  left: 0;
  z-index: 10;
  width: fit-content;
  border: 1px solid ${({ theme }) => theme.color.BORDER_DARK};
  border-radius: ${pxToRem(4)};
  background-color: ${({ theme }) => theme.color.POPUP_BACKGROUND};
  box-shadow: 0 12px 24px 0 ${({ theme }) => theme.color.BOX_SHADOW};

  ${({ theme }) =>
    theme.media.tablet(css`
      ${theme.mixin.flexColumn('flex-start', 'stretch')}
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    `)}
`;

const Top = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.BORDER_DARK};

  ${({ theme }) =>
    theme.media.tablet(css`
      flex: 1;
    `)}
`;

const Bottom = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-end', 'center', pxToRem(16))}
  padding: ${pxToRem(12, 16)};

  & > button:nth-child(1) {
    display: none;
    background-color: ${({ theme }) => theme.color.RED_LIGHT};
    color: ${({ theme }) => theme.color.GRAY_DARK};

    &:hover {
      background-color: ${({ theme }) => theme.color.RED_DARK};
    }
  }

  ${({ theme }) =>
    theme.media.tablet(css`
      flex-shrink: 0;
      ${theme.mixin.flex()}
      gap: ${pxToRem(10)};

      & > button {
        flex: 1;
      }

      & > button:nth-child(1) {
        display: inline-block;
      }
    `)}
`;

function FilterPopup({ onClear, onApply, children }: Props) {
  const { id, isOpen, setIsOpen, handleClose } = useFilterContext();
  usePopup({ id, isOpen, setIsOpen, handleClose });
  usePreventScroll({ isOpen, elementType: 'popup' });

  if (!isOpen) {
    return null;
  }

  return (
    <Container id={`popup-${id}`}>
      <Top>{children}</Top>
      <Bottom>
        <ButtonClose onClick={() => setIsOpen(false)} />
        <ButtonClear onClick={onClear} />
        <ButtonApply onClick={onApply} />
      </Bottom>
    </Container>
  );
}

export default FilterPopup;
