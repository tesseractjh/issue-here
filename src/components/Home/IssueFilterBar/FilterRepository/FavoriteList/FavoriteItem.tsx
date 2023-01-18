import React from 'react';
import styled, { css } from 'styled-components';
import type { FilterRepositoryState } from '@recoil/filter';
import InputCheckbox from '@components/common/Input/InputCheckbox';
import { ReactComponent as BinIcon } from '@assets/icons/bin.svg';
import pxToRem from '@utils/pxToRem';
import useFavoriteItem from './hooks/useFavoriteItem';
import { URL_GITHUB, URL_GITHUB_AVATAR_IMAGE } from '@constants/URL';

interface Props extends Omit<FilterRepositoryState, 'selected'> {
  onDelete: (
    repoState: Pick<FilterRepositoryState, 'owner' | 'repo'>
  ) => React.MouseEventHandler;
}

const Container = styled.li`
  position: relative;

  & label {
    width: 100%;
  }

  & .box {
    align-self: flex-start;
    margin-top: ${pxToRem(8)};
  }
`;

const ButtonRemoveFavorite = styled.button`
  flex-shrink: 0;
  align-self: flex-start;
  position: absolute;
  top: ${pxToRem(48)};
  left: ${pxToRem(5)};
  width: ${pxToRem(18)};
  height: ${pxToRem(18)};

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

const Repository = styled.div<{ checked: boolean }>`
  flex: 1;
  ${({ theme }) => theme.mixin.flex('flex-start')}
  padding: ${pxToRem(16)};
  border: 1px solid ${({ theme }) => theme.color.NAVY_LIGHT};
  border-radius: ${pxToRem(10)};
  background-color: ${({ theme }) => theme.color.ITEM_BACKGROUND};
  font-size: ${pxToRem(14)};

  &:hover {
    background-color: ${({ theme }) => theme.color.BLUE_LIGHT};
  }

  ${({ checked, theme }) =>
    checked &&
    css`
      border-color: ${theme.color.POPUP_TEXT};
      background-color: ${theme.color.BLUE_LIGHT};
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

function FavoriteItem({ onDelete, ownerId, owner, repo }: Props) {
  const [selected, setSelected] = useFavoriteItem({ owner, repo });

  return (
    <Container>
      <InputCheckbox size="large" checked={selected} setChecked={setSelected}>
        <Repository checked={selected}>
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
      </InputCheckbox>
      <ButtonRemoveFavorite onClick={onDelete({ owner, repo })}>
        <BinIcon />
      </ButtonRemoveFavorite>
    </Container>
  );
}

export default React.memo(FavoriteItem);
