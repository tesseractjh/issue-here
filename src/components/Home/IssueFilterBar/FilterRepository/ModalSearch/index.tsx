import styled from 'styled-components';
import Modal from '@components/common/Modal';
import InputSearchRepository from './InputSearch';
import pxToRem from '@utils/pxToRem';
import RepositoryList from './RepositoryList';
import useModalSearch from './hooks/useModalSearch';

const Content = styled.div`
  width: ${pxToRem(600)};
`;

const Scroll = styled.div`
  overflow-y: auto;
  overscroll-behavior: contain;
  position: relative;
  height: ${pxToRem(400)};
  margin-top: ${pxToRem(20)};
`;

function ModalSearch() {
  const modalProps = useModalSearch();

  return (
    <Modal {...modalProps}>
      <Content>
        <InputSearchRepository />
        <Scroll>
          <RepositoryList />
        </Scroll>
      </Content>
    </Modal>
  );
}

export default ModalSearch;
