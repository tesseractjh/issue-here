import { useCallback, useMemo } from 'react';

interface Params {
  name: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose?: () => void;
}

function useModal({ name, isOpen, setIsOpen, onClose }: Params) {
  const handleClose = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [setIsOpen, onClose]);

  const value = useMemo(
    () => ({ name, isOpen, setIsOpen, handleClose }),
    [name, isOpen, setIsOpen, handleClose]
  );

  return value;
}

export default useModal;
