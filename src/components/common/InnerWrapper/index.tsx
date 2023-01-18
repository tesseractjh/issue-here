import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import { CONTENT_WIDTH } from '@constants/style';

const Container = styled.div`
  max-width: ${pxToRem(CONTENT_WIDTH)};
  height: 100%;
  padding: ${pxToRem(0, 40)};
  margin: 0 auto;

  ${({ theme }) =>
    theme.media.tablet(`
      padding: ${pxToRem(0, 20)};
  `)}
`;

function InnerWrapper({ children }: React.PropsWithChildren) {
  return <Container>{children}</Container>;
}

export default InnerWrapper;
