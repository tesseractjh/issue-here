import styled, { css } from 'styled-components';
import ButtonSearch from './ButtonSearch';
import FavoriteList from './FavoriteList';
import pxToRem from '@utils/pxToRem';
import Message from './Message';
import ModalSearch from './ModalSearch';
import useFilterRepository from './ModalSearch/hooks/useFilterRepository';
import IssueFilter from '../IssueFilter';

const Content = styled.div`
  width: ${pxToRem(360)};

  ${({ theme }) =>
    theme.media.tablet(css`
      ${theme.mixin.flexColumn('flext-start', 'stretch')}
      width: 100%;
      height: 100%;
    `)}
`;

const Top = styled.div`
  padding: ${pxToRem(16)};
  border-bottom: 1px solid ${({ theme }) => theme.color.BORDER_DARK};
  text-align: center;

  & > button {
    width: 100%;
    margin-top: ${pxToRem(8)};
  }

  ${({ theme }) =>
    theme.media.tablet(`
    & > button {
      margin: 0;
    }
  `)}
`;

const Bottom = styled.div`
  padding: ${pxToRem(16)};

  ${({ theme }) =>
    theme.media.tablet(css`
      height: calc(100vh - ${pxToRem(130)});
    `)}
`;

function FitlerRepository() {
  const { handleClear, handleClose } = useFilterRepository();

  return (
    <IssueFilter
      id="repository"
      triggerContent="Repository"
      onClear={handleClear}
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
