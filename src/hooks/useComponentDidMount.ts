import { useState, useEffect } from 'react';

function useComponentDidMount(callback: () => void) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      callback();
    }
  }, [mounted, callback]);
}

export default useComponentDidMount;
