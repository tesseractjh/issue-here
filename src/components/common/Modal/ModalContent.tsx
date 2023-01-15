import styled from 'styled-components';
import { ReactComponent as XmarkIcon } from '@assets/icons/xmark.svg';
import pxToRem from '@utils/pxToRem';
import useModalContext from './hooks/useModalContext';

const Container = styled.div`
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  padding: ${pxToRem(20)};
  border-radius: ${pxToRem(8)};
  background-color: ${({ theme }) => theme.color.WHITE};
`;

const Top = styled.div`
  margin-bottom: ${pxToRem(8)};
  text-align: right;
`;

const ButtonClose = styled.button`
  ${({ theme }) => theme.mixin.inlineFlex()};
  padding: ${pxToRem(2)};
  border-radius: ${pxToRem(4)};

  & svg {
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.GRAY_LIGHT};
    & svg {
      fill: ${({ theme }) => theme.color.WHITE};
    }
  }
`;

function ModalContent({ children }: React.PropsWithChildren) {
  const { handleClose } = useModalContext();

  return (
    <Container>
      <Top>
        <ButtonClose onClick={handleClose}>
          <XmarkIcon />
        </ButtonClose>
      </Top>
      {children}
    </Container>
  );
}

export default ModalContent;
