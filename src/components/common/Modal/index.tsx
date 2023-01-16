import ModalBackground from './ModalBackground';
import ModalContent from './ModalContent';
import ModalContext from './ModalContext';
import Portal from './Portal';
import useModal from './hooks/useModal';

interface Props extends React.PropsWithChildren {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ isOpen, setIsOpen, children }: Props) {
  const value = useModal({ isOpen, setIsOpen });

  if (!isOpen) {
    return null;
  }

  return (
    <ModalContext.Provider value={value}>
      <Portal>
        <ModalBackground />
        <ModalContent>{children}</ModalContent>
      </Portal>
    </ModalContext.Provider>
  );
}

export default Modal;
