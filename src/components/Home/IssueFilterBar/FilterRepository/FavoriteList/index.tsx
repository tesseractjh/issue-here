import styled from 'styled-components';
import { ReactComponent as StarIcon } from '@assets/icons/star.svg';
import pxToRem from '@utils/pxToRem';

const Container = styled.div``;

const Top = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-start', 'center')}
  font-weight: 700;
  font-size: ${pxToRem(18)};
  color: ${({ theme }) => theme.lightColor.GRAY_DARK};

  & svg {
    width: ${pxToRem(18)};
    height: ${pxToRem(18)};
    margin-right: ${pxToRem(10)};
    fill: ${({ theme }) => theme.color.YELLOW};
    stroke: ${({ theme }) => theme.lightColor.GRAY_DARK};
    stroke-width: 10;
  }
`;

function FavoriteList() {
  return (
    <Container>
      <Top>
        <StarIcon />
        즐겨찾기
      </Top>
    </Container>
  );
}

export default FavoriteList;
