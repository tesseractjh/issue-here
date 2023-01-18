import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Container = styled.div`
  ${({ theme }) => theme.mixin.flexColumn('flex-start', 'stretch')}
  position: relative;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  position: relative;
`;

function Layout({ children }: React.PropsWithChildren) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
}

export default Layout;
