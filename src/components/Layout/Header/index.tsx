import styled, { css } from 'styled-components';
import HiddenText from '@components/common/HiddenText';
import InnerWrapper from '@components/common/InnerWrapper';
import { ReactComponent as GithubIcon } from '@assets/icons/github.svg';
import pxToRem from '@utils/pxToRem';
import SwitchTheme from './ThemeSwitch';
import { HEADER_HEIGHT_DESKTOP, HEADER_HEIGHT_TABLET } from '@constants/style';
import useHeader from '../hooks/useHeader';

const Container = styled.header`
  position: sticky;
  top: ${pxToRem(-120)};
  z-index: 100;
  padding-top: ${pxToRem(79)};
  border-bottom: 1px solid ${({ theme }) => theme.color.BORDER};
  background-color: ${({ theme }) => theme.color.WHITE};
  color: ${({ theme }) => theme.color.NAVY};

  .header-fixed & {
    padding-top: ${pxToRem(120)};
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
      &,
      .header-fixed & {
        top: 0;
        padding-top: 0;
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

const LogoWrapper = styled.h1`
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
    justify-content: flex-start;
    height: ${pxToRem(HEADER_HEIGHT_DESKTOP - 1)};
    font-size: ${pxToRem(32)};

    & svg {
      width: ${pxToRem(32)};
      height: ${pxToRem(32)};
      margin-right: ${pxToRem(12)};
    }
  }

  ${({ theme }) =>
    theme.media.tablet(css`
      &,
      .header-fixed & {
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
        <HiddenText>다크 모드 스위치</HiddenText>
        <SwitchTheme />
      </InnerWrapper>
    </Container>
  );
}

export default Header;
