interface Params<T> {
  value: T;
  setValue: (value: T | ((prev: T) => T)) => void;
}

function useRadio<T>({ value, setValue }: Params<T>) {
  const handleChange = () => setValue(value);

  const handleKeyDown: React.KeyboardEventHandler = ({ key }) => {
    if (key === 'Enter') {
      setValue(value);
    }
  };

  return { handleChange, handleKeyDown };
}

export default useRadio;
