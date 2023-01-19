import styled, { css } from 'styled-components';
import { ReactComponent as StarIcon } from '@assets/icons/star.svg';
import pxToRem from '@utils/pxToRem';
import FavoriteItem from './FavoriteItem';
import useFavoriteList from './hooks/useFavoriteList';

const Container = styled.div`
  overflow-y: auto;
  max-height: ${pxToRem(400)};

  ${({ theme }) =>
    theme.media.tablet(css`
      ${theme.mixin.flexColumn('flex-start', 'stretch')}
      max-height: none;
      height: 100%;
    `)}
`;

const Top = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-start', 'center')}
  margin-bottom: ${pxToRem(20)};
  font-weight: 700;
  font-size: ${pxToRem(18)};
  color: ${({ theme }) => theme.color.GRAY_DARK};

  & svg {
    width: ${pxToRem(18)};
    height: ${pxToRem(18)};
    margin-right: ${pxToRem(10)};
    fill: ${({ theme }) => theme.color.YELLOW};
    stroke: ${({ theme }) => theme.lightColor.GRAY_DARK};
    stroke-width: 10;
  }
`;

const Bottom = styled.ul`
  ${({ theme }) => theme.mixin.flexColumn('flex-start', 'stretch', pxToRem(10))}
  position: relative;
  min-height: ${pxToRem(100)};

  ${({ theme }) =>
    theme.media.tablet(css`
      flex: 1;
    `)}
`;

const NoResult = styled.div`
  ${({ theme }) => theme.placeholder.absoluteCenter}
  width: 100%;
  font-size: ${pxToRem(14)};
  text-align: center;

  ${({ theme }) =>
    theme.media.tablet(css`
      flex: 1;
    `)}
`;

function FavoriteList() {
  const { favorites, handleDelete } = useFavoriteList();

  return (
    <Container>
      <Top>
        <StarIcon />
        즐겨찾기
      </Top>
      <Bottom>
        {!favorites.length && (
          <NoResult>즐겨찾기로 등록된 Repository가 없습니다.</NoResult>
        )}
        {favorites.map((favorite) => (
          <FavoriteItem
            key={`${favorite.owner}-${favorite.repo}`}
            onDelete={handleDelete}
            {...favorite}
          />
        ))}
      </Bottom>
    </Container>
  );
}

export default FavoriteList;
