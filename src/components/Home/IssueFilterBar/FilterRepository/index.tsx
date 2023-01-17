import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import ButtonSearch from './ButtonSearch';
import FavoriteList from './FavoriteList';
import ModalSearch from './ModalSearch';
import useFilterRepository from './ModalSearch/hooks/useFilterRepository';
import IssueFilter from '../IssueFilter';

const Content = styled.div`
  min-width: ${pxToRem(350)};
`;

const Top = styled.div`
  ${({ theme }) => theme.mixin.flexColumn()}
  gap: ${pxToRem(10)};
  padding: ${pxToRem(16)};
  border-bottom: 1px solid ${({ theme }) => theme.lightColor.BORDER};
  font-size: ${pxToRem(12)};
`;

const Bottom = styled.div`
  padding: ${pxToRem(16)};
`;

function FitlerRepository() {
  const handleClose = useFilterRepository();

  return (
    <IssueFilter
      id="repository"
      triggerContent="Repository"
      onClose={handleClose}
    >
      <ModalSearch />
      <Content>
        <Top>
          Repository를 검색하여 즐겨찾기에 등록하세요!
          <ButtonSearch />
        </Top>
        <Bottom>
          <FavoriteList />
        </Bottom>
      </Content>
    </IssueFilter>
  );
}

export default FitlerRepository;
