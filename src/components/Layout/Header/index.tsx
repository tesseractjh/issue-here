import styled, { css, keyframes } from 'styled-components';
import InnerWrapper from '@components/InnerWrapper';
import { ReactComponent as GithubIcon } from '@assets/icons/github.svg';
import pxToRem from '@utils/pxToRem';
import { HEADER_HEIGHT_DESKTOP, HEADER_HEIGHT_TABLET } from '@constants/style';
import useHeader from '../hooks/useHeader';

const Animation = keyframes`
  from {
    transform: translate3d(0, ${pxToRem(-60)}, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

const FixedContainerStyle = css`
  position: fixed;
  top: 0;
  transform: translate3d(0, 0, 0);
  z-index: 100;
  width: 100%;
  margin: 0;
  animation: ${Animation} 0.2s ease-in-out;
`;

const FixedWrapperStyle = css`
  justify-content: flex-start;
  height: ${pxToRem(HEADER_HEIGHT_DESKTOP - 1)};
  margin: 0 auto;
  font-size: ${pxToRem(32)};

  & svg {
    width: ${pxToRem(32)};
    height: ${pxToRem(32)};
    margin-right: ${pxToRem(12)};
  }
`;

const Container = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.color.BORDER};
  margin-top: ${pxToRem(80)};
  background-color: ${({ theme }) => theme.color.WHITE};
  color: ${({ theme }) => theme.color.NAVY};

  .header-fixed & {
    ${FixedContainerStyle}
  }

  ${({ theme }) =>
    theme.media.tablet(css`
      ${FixedContainerStyle}

      &, .header-fixed & {
        animation: none;
      }
    `)}
`;

const LogoWrapper = styled.div`
  ${({ theme }) => theme.mixin.flex()}
  height: ${pxToRem(100)};
  font-weight: 700;
  font-size: ${pxToRem(48)};

  & svg {
    width: ${pxToRem(48)};
    height: ${pxToRem(48)};
    margin-right: ${pxToRem(16)};
    fill: ${({ theme }) => theme.color.NAVY};
  }

  .header-fixed & {
    ${FixedWrapperStyle}
  }

  ${({ theme }) =>
    theme.media.tablet(css`
      ${FixedWrapperStyle}

      &, .header-fixed & {
        height: ${pxToRem(HEADER_HEIGHT_TABLET - 1)};
        font-size: ${pxToRem(24)};

        & svg {
          width: ${pxToRem(24)};
          height: ${pxToRem(24)};
          margin-right: ${pxToRem(8)};
        }
      }
    `)}
`;

const Bright = styled.span`
  color: ${({ theme }) => theme.color.BLUE_DARK};
`;

function Header() {
  useHeader();

  return (
    <Container>
      <InnerWrapper>
        <LogoWrapper>
          <GithubIcon />
          issue<Bright>here</Bright>
        </LogoWrapper>
      </InnerWrapper>
    </Container>
  );
}

export default Header;
