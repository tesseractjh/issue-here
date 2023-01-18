import React, { useCallback, useEffect } from 'react';

interface Params {
  id: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose?: () => void;
}

function usePopup({ id, isOpen, setIsOpen, handleClose }: Params) {
  const handleDocumentClick = useCallback(
    ({ target }: MouseEvent) => {
      if (
        !(target instanceof Element) ||
        target.closest(`#${id}`) ||
        target.closest('.modal')
      ) {
        return;
      }
      setIsOpen(false);
      handleClose?.();
    },
    [id, setIsOpen, handleClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleDocumentClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [isOpen, handleDocumentClick]);
}

export default usePopup;
