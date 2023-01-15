import { useCallback, useMemo } from 'react';

interface Params {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function useModal({ isOpen, setIsOpen }: Params) {
  const handleClose = useCallback(() => setIsOpen(false), [setIsOpen]);

  const value = useMemo(
    () => ({ isOpen, setIsOpen, handleClose }),
    [isOpen, setIsOpen, handleClose]
  );

  return value;
}

export default useModal;
