import { useCallback, useMemo } from 'react';

interface Params {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose?: () => void;
}

function useModal({ isOpen, setIsOpen, onClose }: Params) {
  const handleClose = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [setIsOpen, onClose]);

  const value = useMemo(
    () => ({ isOpen, setIsOpen, handleClose }),
    [isOpen, setIsOpen, handleClose]
  );

  return value;
}

export default useModal;
