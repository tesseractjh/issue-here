import React from 'react';
import styled from 'styled-components';
import type { FilterRepositoryState } from '@recoil/filter';
import { ReactComponent as BinIcon } from '@assets/icons/bin.svg';
import pxToRem from '@utils/pxToRem';
import { URL_GITHUB, URL_GITHUB_AVATAR_IMAGE } from '@constants/URL';

interface Props {
  onClick: ({
    owner,
    repo
  }: Pick<FilterRepositoryState, 'owner' | 'repo'>) => React.MouseEventHandler;
  ownerId: number;
  owner: string;
  repo: string;
}

const Container = styled.li`
  ${({ theme }) => theme.mixin.flex('flex-start')}
`;

const ButtonRemoveFavorite = styled.button`
  flex-shrink: 0;
  align-self: flex-start;
  position: relative;
  width: ${pxToRem(18)};
  height: ${pxToRem(18)};
  margin: ${pxToRem(8, 16, 0, 0)};

  & svg {
    ${({ theme }) => theme.placeholder.absoluteCenter}
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.color.RED_DARK};
  }

  &:hover svg {
    fill: ${({ theme }) => theme.color.RED_LIGHT};
    stroke: ${({ theme }) => theme.color.GRAY_DARK};
    stroke-width: 6;
  }
`;

const Repository = styled.div`
  flex: 1;
  ${({ theme }) => theme.mixin.flex('flex-start')}
  padding: ${pxToRem(16)};
  border: 1px solid ${({ theme }) => theme.color.BLUE_DARK};
  border-radius: ${pxToRem(10)};
  background-color: ${({ theme }) => theme.color.ITEM_BACKGROUND};
  font-size: ${pxToRem(14)};

  &:hover {
    background-color: ${({ theme }) => theme.color.BLUE_LIGHT};
  }
`;

const ImageAnchor = styled.a`
  flex-shrink: 0;
  align-self: flex-start;
  overflow: hidden;
  width: ${pxToRem(48)};
  height: ${pxToRem(48)};
  margin-right: ${pxToRem(16)};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.lightColor.BACKGROUND};
  outline: 1px solid ${({ theme }) => theme.color.NAVY};

  & > img {
    width: 100%;
    height: 100%;
  }
`;

const Info = styled.div`
  ${({ theme }) => theme.mixin.flexColumn('center', 'flex-start', pxToRem(10))}
  word-break: break-all;
  line-height: 1.3;

  & a:hover {
    text-decoration: underline;
  }
`;

const Owner = styled.a`
  font-size: ${pxToRem(14)};
  color: ${({ theme }) => theme.color.GRAY};
`;

const RepoName = styled.a`
  font-weight: 700;
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.color.POPUP_TEXT};
`;

function FavoriteItem({ onClick, ownerId, owner, repo }: Props) {
  return (
    <Container>
      <ButtonRemoveFavorite onClick={onClick({ owner, repo })}>
        <BinIcon />
      </ButtonRemoveFavorite>
      <Repository>
        <ImageAnchor href={`${URL_GITHUB}/${owner}`}>
          <img
            src={`${URL_GITHUB_AVATAR_IMAGE}/${ownerId}?v=4`}
            alt="Repository Owner"
          />
        </ImageAnchor>
        <Info>
          <Owner href={`${URL_GITHUB}/${owner}`}>{owner}</Owner>
          <RepoName href={`${URL_GITHUB}/${owner}/${repo}`}>{repo}</RepoName>
        </Info>
      </Repository>
    </Container>
  );
}

export default React.memo(FavoriteItem);
