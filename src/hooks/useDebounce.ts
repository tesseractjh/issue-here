import { useEffect } from 'react';

interface Params<T> {
  value: T;
  callback: (value: T) => void;
  delay: number;
}

function useDebounce<T>({ value, callback, delay }: Params<T>) {
  useEffect(() => {
    const timerId: NodeJS.Timeout = setTimeout(callback, delay, value);
    return () => clearTimeout(timerId);
  }, [callback, delay, value]);
}

export default useDebounce;
