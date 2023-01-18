import styled, { css } from 'styled-components';
import { ReactComponent as XmarkIcon } from '@assets/icons/xmark.svg';
import pxToRem from '@utils/pxToRem';
import { MODAL_HEADER_HEIGHT } from '@constants/style';
import useModalContext from './hooks/useModalContext';

const Container = styled.div`
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  ${({ theme }) => theme.mixin.flexColumn('flex-start', 'stretch')}
  padding: ${pxToRem(20)};
  border: 1px solid ${({ theme }) => theme.color.BORDER_DARK};
  border-radius: ${pxToRem(8)};
  background-color: ${({ theme }) => theme.color.POPUP_BACKGROUND};

  ${({ theme }) =>
    theme.media.tablet(css`
      top: 0;
      left: 0;
      transform: none;
      width: 100vw;
      height: 100vh;
      padding: 0;
      border: none;
      border-radius: 0;
    `)}
`;

const Top = styled.div`
  margin-bottom: ${pxToRem(8)};
  text-align: right;

  ${({ theme }) =>
    theme.media.tablet(css`
      flex-shrink: 0;
      ${theme.mixin.flex()}
      position: relative;
      height: ${pxToRem(MODAL_HEADER_HEIGHT)};
      margin: 0;
      background-color: ${theme.color.BLUE};
    `)}
`;

const Title = styled.strong`
  display: none;
  font-size: ${pxToRem(18)};

  ${({ theme }) =>
    theme.media.tablet(css`
      display: inline;
      color: ${theme.lightColor.BLUE_LIGHT};
    `)}
`;

const ButtonClose = styled.button`
  ${({ theme }) => theme.mixin.inlineFlex()};
  padding: ${pxToRem(2)};
  border-radius: ${pxToRem(4)};

  & svg {
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    fill: ${({ theme }) => theme.color.GRAY};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.GRAY_LIGHT};
    & svg {
      fill: ${({ theme }) => theme.color.WHITE};
    }
  }

  ${({ theme }) =>
    theme.media.tablet(css`
      position: absolute;
      top: 50%;
      left: ${pxToRem(10)};
      transform: translateY(-50%);

      & svg {
        fill: ${theme.lightColor.WHITE};
      }

      &:hover {
        background-color: ${theme.lightColor.BLUE_LIGHT};
        & svg {
          fill: ${theme.lightColor.GRAY};
        }
      }
    `)}
`;

function ModalContent({ children }: React.PropsWithChildren) {
  const { name, handleClose } = useModalContext();

  return (
    <Container className="modal">
      <Top>
        <Title>{name}</Title>
        <ButtonClose onClick={handleClose}>
          <XmarkIcon />
        </ButtonClose>
      </Top>
      {children}
    </Container>
  );
}

export default ModalContent;
