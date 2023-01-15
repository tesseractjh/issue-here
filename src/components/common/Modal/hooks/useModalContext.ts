import { useContext } from 'react';
import ModalContext from '../ModalContext';

function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      'ModalContext는 Modal 컴포넌트 바깥에서 렌더될 수 없습니다!'
    );
  }

  return context;
}

export default useModalContext;
