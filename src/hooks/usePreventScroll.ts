import { useEffect } from 'react';

interface Params {
  isOpen: boolean;
  elementType: 'modal' | 'popup';
}

function usePreventScroll({ isOpen, elementType }: Params) {
  const className = `prevent-scroll-${elementType}`;

  useEffect(() => {
    const { body } = document;

    if (isOpen) {
      body.classList.add(className);
    } else {
      body.classList.remove(className);
    }
  }, [isOpen, className]);
}

export default usePreventScroll;
