import styled from 'styled-components';
import useModalContext from './hooks/useModalContext';

const Background = styled.div`
  ${({ theme }) => theme.mixin.flex()}
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

function ModalBackground() {
  const { handleClose } = useModalContext();

  return <Background onClick={handleClose} />;
}

export default ModalBackground;
