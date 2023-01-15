interface Params {
  value: string;
  setValue: (value: string | ((prev: string) => string)) => void;
}

function useRadio<T extends HTMLElement>({ value, setValue }: Params) {
  const handleChange = () => setValue(value);

  const handleKeyDown: React.KeyboardEventHandler<T> = ({ key }) => {
    if (key === 'Enter') {
      setValue(value);
    }
  };

  return { handleChange, handleKeyDown };
}

export default useRadio;
