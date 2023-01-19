import styled from 'styled-components';
import Spinner from '../Spinner';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  opacity: 0.6;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.WHITE};

  & .spinner {
    ${({ theme }) => theme.placeholder.absoluteCenter}
  }
`;

function Loading() {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}

export default Loading;
