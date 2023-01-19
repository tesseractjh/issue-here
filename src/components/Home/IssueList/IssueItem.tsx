import type { Github } from 'src/types/github';
import React from 'react';
import styled from 'styled-components';
import HiddenText from '@components/common/HiddenText';
import { ReactComponent as ClosedIcon } from '@assets/icons/closed.svg';
import { ReactComponent as CommentIcon } from '@assets/icons/comment.svg';
import { ReactComponent as OpenIcon } from '@assets/icons/issue.svg';
import useIssueItem from './hooks/useIssueItem';
import { dateFormatter } from '@utils/dateFormatter';
import pxToRem from '@utils/pxToRem';
import { URL_GITHUB } from '@constants/URL';

interface Props {
  issue: Github.Issue;
}

const Container = styled.li`
  ${({ theme }) => theme.mixin.flex('flex-start')}
  padding: ${pxToRem(12, 20)};

  & a:hover {
    text-decoration: underline;
  }

  & > svg:first-child {
    align-self: flex-start;
    width: ${pxToRem(18)};
    height: ${pxToRem(18)};
    margin: ${pxToRem(18, 12, 0, 0)};

    &.open {
      fill: ${({ theme }) => theme.lightColor.GREEN_DARK};
    }

    &.closed {
      fill: ${({ theme }) => theme.lightColor.BLUE_DARK};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.HOVER_BACKGROUND};
  }

  ${({ theme }) =>
    theme.media.tablet(`
    padding: ${pxToRem(10, 12)};
  `)}
`;

const IssueInfo = styled.div`
  flex: 1;
`;

const Repository = styled.a`
  font-size: ${pxToRem(12)};
  color: ${({ theme }) => theme.color.POPUP_TEXT};
`;

const Title = styled.p`
  margin-top: ${pxToRem(4)};
  font-weight: 700;
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.color.GRAY_DARK};
  line-height: 1.4;
`;

const Number = styled.span`
  margin-right: ${pxToRem(8)};
  color: ${({ theme }) => theme.lightColor.BLUE};
`;

const DetailInfo = styled.p`
  ${({ theme }) => theme.mixin.flex('flex-start', 'center', pxToRem(4, 12))}
  flex-wrap: wrap;
  margin-top: ${pxToRem(8)};
  font-size: ${pxToRem(12)};
  color: ${pxToRem(16)};
  line-height: ${pxToRem(20)};

  & svg {
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
    margin-right: ${pxToRem(6)};
    fill: ${({ theme }) => theme.color.GRAY};
  }
`;

const Info = styled.span`
  &,
  & > a {
    ${({ theme }) => theme.mixin.inlineFlex()};
  }
`;

const Image = styled.img`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  margin-right: ${pxToRem(6)};
  border: 1px solid ${({ theme }) => theme.color.GRAY_DARK};
  border-radius: 50%;
`;

function IssueItem({ issue }: Props) {
  const {
    html_url: issueURL,
    number,
    title,
    user: { login: userName, avatar_url: imageURL, html_url: userURL },
    state,
    comments,
    created_at: openDate,
    closed_at: closedDate
  } = issue;

  const { repo } = useIssueItem(issue);

  return (
    <Container>
      {state === 'open' ? (
        <OpenIcon className="open" />
      ) : (
        <ClosedIcon className="closed" />
      )}
      <IssueInfo>
        <Repository href={`${URL_GITHUB}/${repo}`}>{repo}</Repository>
        <Title>
          <a href={issueURL}>
            <Number>{`[#${number}]`}</Number>
            {title}
          </a>
        </Title>
        <DetailInfo>
          <Info>
            <HiddenText>작성자</HiddenText>
            <a href={userURL}>
              <Image src={imageURL} alt="User Avatar" />
              {userName}
            </a>
          </Info>
          <Info>
            <CommentIcon />
            <HiddenText>댓글 수</HiddenText>
            {comments}
          </Info>
          <Info>
            <OpenIcon />
            <HiddenText>이슈가 열린 날짜</HiddenText>
            {dateFormatter(openDate)}
          </Info>
          {closedDate && (
            <Info>
              <ClosedIcon />
              <HiddenText>이슈가 닫힌 날짜</HiddenText>
              {dateFormatter(closedDate)}
            </Info>
          )}
        </DetailInfo>
      </IssueInfo>
    </Container>
  );
}

export default React.memo(IssueItem);
