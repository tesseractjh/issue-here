import type { Github } from 'src/types/github';
import React from 'react';
import styled, { css } from 'styled-components';
import useHighlight from '@hooks/useHighlight';
import HiddenText from '@components/common/HiddenText';
import { ReactComponent as ForkIcon } from '@assets/icons/fork.svg';
import { ReactComponent as IssueIcon } from '@assets/icons/issue.svg';
import useRepositoryItem from './hooks/useRepositoryItem';
import { ReactComponent as ContainedStarIcon } from '@assets/icons/star.svg';
import { ReactComponent as StarIcon } from '@assets/icons/star_outlined.svg';
import pxToRem from '@utils/pxToRem';

interface Props {
  item: Github.Repository;
  query: string;
}

const Container = styled.li`
  ${({ theme }) => theme.mixin.flex('flex-start')}
  padding: ${pxToRem(16)};
  border: 1px solid ${({ theme }) => theme.lightColor.BLUE_DARK};
  border-radius: ${pxToRem(10)};
  font-size: ${pxToRem(14)};
  color: ${({ theme }) => theme.lightColor.GRAY_DARK};

  &:hover {
    background-color: ${({ theme }) => theme.lightColor.BLUE_LIGHT};
  }
`;

const ButtonAddFavorite = styled.button<{ isFavorite: boolean }>`
  flex-shrink: 0;
  align-self: flex-start;
  position: relative;
  width: ${pxToRem(18)};
  height: ${pxToRem(18)};
  margin-right: ${pxToRem(16)};

  & svg {
    ${({ theme }) => theme.placeholder.absoluteCenter}
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.lightColor.BLUE_DARK};
  }

  ${({ isFavorite, theme }) =>
    isFavorite &&
    css`
      & svg {
        fill: ${theme.lightColor.YELLOW};
        stroke: ${theme.lightColor.GRAY_DARK};
        stroke-width: 10;
      }
    `}
`;

const ImageAnchor = styled.a`
  flex-shrink: 0;
  align-self: flex-start;
  overflow: hidden;
  width: ${pxToRem(48)};
  height: ${pxToRem(48)};
  margin-right: ${pxToRem(16)};
  border-radius: 50%;
  outline: 1px solid ${({ theme }) => theme.lightColor.NAVY};

  & > img {
    width: 100%;
    height: 100%;
  }
`;

const RepositoryInfo = styled.div`
  word-break: break-all;
  line-height: 1.4;
`;

const Name = styled.a`
  font-weight: 600;
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.color.BLUE_DARK};
  text-overflow: ellipsis;

  &:hover {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  margin: ${pxToRem(8, 0)};
`;

const TopicList = styled.ul`
  ${({ theme }) => theme.mixin.flex('flex-start', 'center', pxToRem(6, 10))}
  flex-wrap: wrap;
  margin: ${pxToRem(8, 0)};
`;

const Topic = styled.li`
  ${({ theme }) => theme.mixin.flex()}
  height: ${pxToRem(20)};
  padding: ${pxToRem(6, 10)};
  border-radius: ${pxToRem(10)};
  background-color: ${({ theme }) => theme.lightColor.BLUE_DARK};
  font-size: ${pxToRem(12)};
  color: ${({ theme }) => theme.lightColor.BLUE_LIGHT};
`;

const NumericalInfo = styled.p`
  ${({ theme }) => theme.mixin.flex('flex-start', 'center', pxToRem(8, 10))}
  flex-wrap: wrap;
  line-height: ${pxToRem(20)};

  & svg {
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
    margin-right: ${pxToRem(6)};
  }
`;

const Info = styled.span`
  ${({ theme }) => theme.mixin.inlineFlex()};
`;

function RepositoryItem({ item, query }: Props) {
  const {
    name: repo,
    full_name: fullName,
    owner: { login: owner, avatar_url: imageURL, html_url: ownerURL },
    html_url: repoURL,
    description,
    stargazers_count: star,
    forks_count: fork,
    open_issues_count: openIssues,
    topics
  } = item;

  const { isFavorite, handleClick } = useRepositoryItem({ owner, repo });

  const highlighted = useHighlight({
    text: fullName,
    query
  });

  return (
    <Container>
      <ButtonAddFavorite onClick={handleClick} isFavorite={isFavorite}>
        {isFavorite ? (
          <ContainedStarIcon className="modal" />
        ) : (
          <StarIcon className="modal" />
        )}
      </ButtonAddFavorite>
      <ImageAnchor href={ownerURL}>
        <img src={imageURL} alt="Repository Owner" />
      </ImageAnchor>
      <RepositoryInfo>
        <Name href={repoURL}>{highlighted}</Name>
        <Description>{description}</Description>
        <TopicList>
          <HiddenText>Topics</HiddenText>
          {topics.map((topic) => (
            <Topic key={topic}>{topic}</Topic>
          ))}
        </TopicList>
        <NumericalInfo>
          <Info>
            <HiddenText>Star count</HiddenText>
            <StarIcon />
            {star.toLocaleString('ko-kr')}
          </Info>
          <Info>
            <HiddenText>Fork count</HiddenText>
            <ForkIcon />
            {fork.toLocaleString('ko-kr')}
          </Info>
          <Info>
            <HiddenText>Open issues count</HiddenText>
            <IssueIcon />
            {openIssues.toLocaleString('ko-kr')}
          </Info>
        </NumericalInfo>
      </RepositoryInfo>
    </Container>
  );
}

export default React.memo(RepositoryItem);
