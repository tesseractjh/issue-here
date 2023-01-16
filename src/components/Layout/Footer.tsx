import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

const Container = styled.footer`
  ${({ theme }) => theme.mixin.flex()}
  height: ${pxToRem(80)};
  background-color: ${({ theme }) => theme.lightColor.NAVY};
  font-size: ${pxToRem(12)};
  color: ${({ theme }) => theme.lightColor.WHITE};

  ${({ theme }) =>
    theme.media.mobile(`
      height: ${pxToRem(60)};
  `)}
`;

function Footer() {
  return <Container>© 2023. Issuehere All Rights Reserved.</Container>;
}

export default Footer;
