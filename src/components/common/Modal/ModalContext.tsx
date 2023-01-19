import { createContext } from 'react';

export type ModalContextValue = {
  name: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export default ModalContext;
