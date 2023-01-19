import styled, { css } from 'styled-components';
import HiddenText from '@components/common/HiddenText';
import InnerWrapper from '@components/common/InnerWrapper';
import pxToRem from '@utils/pxToRem';
import FilterIssueState from './FilterIssueState';
import {
  HEADER_HEIGHT_DESKTOP,
  HEADER_HEIGHT_TABLET,
  ISSUE_FILTER_BAR_HEIGHT
} from '@constants/style';
import FitlerRepository from './FilterRepository';

const Container = styled.div`
  position: sticky;
  top: ${pxToRem(HEADER_HEIGHT_DESKTOP)};
  z-index: 110;
  background-color: ${({ theme }) => theme.color.BACKGROUND_LIGHT};
  box-shadow: 0 2px 10px 0 ${({ theme }) => theme.color.BOX_SHADOW_LIGHT};

  ${({ theme }) =>
    theme.media.tablet(css`
      top: ${pxToRem(HEADER_HEIGHT_TABLET)};
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
        <Flex>
          <HiddenText>Issue filter</HiddenText>
          <FitlerRepository />
          <FilterIssueState />
        </Flex>
      </InnerWrapper>
    </Container>
  );
}

export default IssueFilterBar;
