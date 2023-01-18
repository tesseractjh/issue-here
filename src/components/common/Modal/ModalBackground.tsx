import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import useModalContext from './hooks/useModalContext';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(${pxToRem(2)});

  ${({ theme }) =>
    theme.media.tablet(`
      display: none;
  `)}
`;

function ModalBackground() {
  const { handleClose } = useModalContext();

  return <Background className="modal" onClick={handleClose} />;
}

export default ModalBackground;
