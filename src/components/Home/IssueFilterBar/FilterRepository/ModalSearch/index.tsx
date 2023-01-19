import styled from 'styled-components';
import Modal from '@components/common/Modal';
import InputSearchRepository from './InputSearch';
import pxToRem from '@utils/pxToRem';
import RepositoryList from './RepositoryList';
import useModalSearch from './hooks/useModalSearch';

const Content = styled.div`
  ${({ theme }) => theme.mixin.flexColumn('flex-start', 'stretch')}
  width: ${pxToRem(600)};

  ${({ theme }) =>
    theme.media.tablet(`
    flex: 1;
      width: 100%;
  `)}
`;

function ModalSearch() {
  const modalProps = useModalSearch();

  return (
    <Modal {...modalProps}>
      <Content>
        <InputSearchRepository />
        <RepositoryList />
      </Content>
    </Modal>
  );
}

export default ModalSearch;
