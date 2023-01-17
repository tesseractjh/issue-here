import styled from 'styled-components';
import { ReactComponent as StarIcon } from '@assets/icons/star.svg';
import pxToRem from '@utils/pxToRem';
import FavoriteItem from './FavoriteItem';
import useFavoriteList from './hooks/useFavoriteList';

const Container = styled.div`
  overflow-y: auto;
  max-height: ${pxToRem(400)};
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
`;

function FavoriteList() {
  const { favorites, handleClick } = useFavoriteList();

  return (
    <Container>
      <Top>
        <StarIcon />
        즐겨찾기
      </Top>
      <Bottom>
        {/*  fallback */}
        {favorites.map((favorite) => (
          <FavoriteItem
            key={`${favorite.owner}-${favorite.repo}`}
            onClick={handleClick}
            {...favorite}
          />
        ))}
      </Bottom>
    </Container>
  );
}

export default FavoriteList;
