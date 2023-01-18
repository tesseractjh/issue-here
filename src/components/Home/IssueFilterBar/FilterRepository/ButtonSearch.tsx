import styled from 'styled-components';
import Button from '@components/common/Button';
import { ReactComponent as MagIcon } from '@assets/icons/mag.svg';
import pxToRem from '@utils/pxToRem';
import useButtonSearch from './hooks/useButtonSearch';

const Content = styled.span`
  ${({ theme }) => theme.mixin.inlineFlex()}

  & svg {
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
    margin-right: ${pxToRem(10)};
    fill: ${({ theme }) => theme.lightColor.BACKGROUND};
  }
`;

function ButtonSearch() {
  const handleClick = useButtonSearch();

  return (
    <Button
      size="medium"
      variant="contained"
      elementType="button"
      theme="normal"
      onClick={handleClick}
    >
      <Content>
        <MagIcon />
        Repository 검색
      </Content>
    </Button>
  );
}

export default ButtonSearch;
