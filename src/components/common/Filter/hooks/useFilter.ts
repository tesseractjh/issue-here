import { useCallback, useMemo, useState } from 'react';

interface Params {
  id: string;
  handleClose?: () => void;
}

function useFilter({ id, handleClose }: Params) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({ id, isOpen, setIsOpen, handleClick, handleClose }),
    [id, isOpen, handleClick, handleClose]
  );

  return value;
}

export default useFilter;
