import styled from 'styled-components';
import InnerWrapper from '@components/InnerWrapper';
import pxToRem from '@utils/pxToRem';
import { HEADER_HEIGHT_TABLET } from '@constants/style';
import Footer from './Footer';
import Header from './Header';

const Container = styled.div`
  ${({ theme }) => theme.mixin.flexColumn('flex-start', 'stretch')}
  min-height: 100vh;

  ${({ theme }) =>
    theme.media.tablet(`
      padding-top: ${pxToRem(HEADER_HEIGHT_TABLET)};
  `)}
`;

const Main = styled.main`
  flex: 1;
`;

function Layout({ children }: React.PropsWithChildren) {
  return (
    <Container>
      <Header />
      <Main>
        <InnerWrapper>{children}</InnerWrapper>
      </Main>
      <Footer />
    </Container>
  );
}

export default Layout;
