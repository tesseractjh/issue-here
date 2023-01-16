import styled, { css, keyframes } from 'styled-components';
import InnerWrapper from '@components/InnerWrapper';
import pxToRem from '@utils/pxToRem';
import {
  HEADER_HEIGHT_DESKTOP,
  HEADER_HEIGHT_TABLET,
  ISSUE_FILTER_BAR_HEIGHT
} from '@constants/style';

const Animation = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }

  30% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(0, ${pxToRem(HEADER_HEIGHT_DESKTOP)}, 0);
  }
`;

const FixedContainerStyle = (headerHeight: number) => css`
  position: fixed;
  top: 0;
  left: 0;
  transform: translate3d(0, ${pxToRem(headerHeight)}, 0);
  z-index: 100;
  width: 100%;
  animation: ${Animation} 0.25s ease-in-out;
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.BACKGROUND_LIGHT};
  box-shadow: 0 2px 10px 0 ${({ theme }) => theme.color.BOX_SHADOW_LIGHT};

  .header-fixed & {
    ${FixedContainerStyle(HEADER_HEIGHT_DESKTOP)}
  }

  ${({ theme }) =>
    theme.media.tablet(css`
      &,
      .header-fixed & {
        ${FixedContainerStyle(HEADER_HEIGHT_TABLET)}
        animation: none;
      }
    `)}
`;

const Flex = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-start', 'center', pxToRem(20))}
  min-height: ${pxToRem(ISSUE_FILTER_BAR_HEIGHT)};
  padding: ${pxToRem(8, 0)};
`;

function IssueFilterBar() {
  return (
    <Container>
      <InnerWrapper>
        <Flex>filters</Flex>
      </InnerWrapper>
    </Container>
  );
}

export default IssueFilterBar;
