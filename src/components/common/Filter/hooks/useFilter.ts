import { useCallback, useMemo, useState } from 'react';

function useFilter(id: string) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({ id, isOpen, setIsOpen, handleClick }),
    [id, isOpen, handleClick]
  );

  return value;
}

export default useFilter;
