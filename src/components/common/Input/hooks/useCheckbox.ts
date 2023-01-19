function useCheckbox<T extends HTMLElement>(
  setChecked: (value: boolean | ((prev: boolean) => boolean)) => void
) {
  const handleChange = () => setChecked((prev) => !prev);

  const handleKeyDown: React.KeyboardEventHandler<T> = ({ key }) => {
    if (key === 'Enter') {
      setChecked((prev) => !prev);
    }
  };

  return { handleChange, handleKeyDown };
}

export default useCheckbox;
