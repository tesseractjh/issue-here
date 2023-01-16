import React, { useCallback, useEffect } from 'react';

interface Params {
  id: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function usePopup({ id, isOpen, setIsOpen }: Params) {
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
    },
    [id, setIsOpen]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleDocumentClick);
    }
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isOpen, handleDocumentClick]);
}

export default usePopup;
