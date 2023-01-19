import { useState, useEffect } from 'react';

interface Params {
  height: number;
  callback: (isScrolled: boolean) => void;
}

function useScroll({ height, callback }: Params) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ({ currentTarget }: Event) => {
      if (!currentTarget || !(currentTarget instanceof Window)) {
        return;
      }
      setIsScrolled(currentTarget.scrollY >= height);
    });
  }, [height]);

  useEffect(() => {
    callback(isScrolled);
  }, [isScrolled, callback]);

  return isScrolled;
}

export default useScroll;
