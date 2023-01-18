import styled from 'styled-components';
import ButtonSearch from './ButtonSearch';
import FavoriteList from './FavoriteList';
import pxToRem from '@utils/pxToRem';
import Message from './Message';
import ModalSearch from './ModalSearch';
import useFilterRepository from './ModalSearch/hooks/useFilterRepository';
import IssueFilter from '../IssueFilter';

const Content = styled.div`
  width: ${pxToRem(360)};
`;

const Top = styled.div`
  ${({ theme }) => theme.mixin.flexColumn()}
  gap: ${pxToRem(10)};
  padding: ${pxToRem(16)};
  border-bottom: 1px solid ${({ theme }) => theme.color.BORDER_DARK};

  & > button {
    width: 100%;
  }
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
          <Message />
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
