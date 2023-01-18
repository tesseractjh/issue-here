import styled, { css, keyframes } from 'styled-components';
import InnerWrapper from '@components/common/InnerWrapper';
import { ReactComponent as GithubIcon } from '@assets/icons/github.svg';
import pxToRem from '@utils/pxToRem';
import { HEADER_HEIGHT_DESKTOP, HEADER_HEIGHT_TABLET } from '@constants/style';
import SwitchTheme from './ThemeSwitch';
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
  z-index: 110;
  width: 100%;
  padding: 0;
  animation: ${Animation} 0.2s ease-in-out;
`;

const FixedWrapperStyle = css`
  justify-content: flex-start;
  height: ${pxToRem(HEADER_HEIGHT_DESKTOP - 1)};
  font-size: ${pxToRem(32)};

  & svg {
    width: ${pxToRem(32)};
    height: ${pxToRem(32)};
    margin-right: ${pxToRem(12)};
  }
`;

const Container = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.color.BORDER};
  padding-top: ${pxToRem(80)};
  background-color: ${({ theme }) => theme.color.WHITE};
  color: ${({ theme }) => theme.color.NAVY};

  .header-fixed & {
    ${FixedContainerStyle}
  }

  & > div {
    position: relative;

    & .switch-toggle {
      position: absolute;
      top: 50%;
      right: ${pxToRem(40)};
      transform: translateY(-50%);
    }
  }

  ${({ theme }) =>
    theme.media.tablet(css`
      ${FixedContainerStyle}

      &, .header-fixed & {
        animation: none;
      }

      & > div {
        ${theme.mixin.flex('space-between')}
        position: static;

        & .switch-toggle {
          position: relative;
          right: 0;
          transform: none;
        }
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
        <SwitchTheme />
      </InnerWrapper>
    </Container>
  );
}

export default Header;
