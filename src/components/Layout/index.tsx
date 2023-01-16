import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import {
  HEADER_HEIGHT_TABLET,
  ISSUE_FILTER_BAR_HEIGHT
} from '@constants/style';
import Footer from './Footer';
import Header from './Header';

const Container = styled.div`
  ${({ theme }) => theme.mixin.flexColumn('flex-start', 'stretch')}
  position: relative;
  min-height: 100vh;

  ${({ theme }) =>
    theme.media.tablet(`
      padding-top: ${pxToRem(HEADER_HEIGHT_TABLET + ISSUE_FILTER_BAR_HEIGHT)};
  `)}
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
