import usePreventScroll from '@hooks/usePreventScroll';
import ModalBackground from './ModalBackground';
import ModalContent from './ModalContent';
import ModalContext from './ModalContext';
import useModal from './hooks/useModal';

interface Props extends React.PropsWithChildren {
  name: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose?: () => void;
}

function Modal({ name, isOpen, setIsOpen, onClose, children }: Props) {
  const value = useModal({ name, isOpen, setIsOpen, onClose });
  usePreventScroll({ isOpen, elementType: 'modal' });

  if (!isOpen) {
    return null;
  }

  return (
    <ModalContext.Provider value={value}>
      <ModalBackground />
      <ModalContent>{children}</ModalContent>
    </ModalContext.Provider>
  );
}

export default Modal;
