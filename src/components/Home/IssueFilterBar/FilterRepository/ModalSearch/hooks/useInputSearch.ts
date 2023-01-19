import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { inputTextState } from '@recoil/input';
import useDebounce from '@hooks/useDebounce';

function useInputSearch() {
  const [inputValue, setInputValue] = useState('');
  const setQuery = useSetRecoilState(inputTextState('repository'));

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    currentTarget: { value }
  }) => {
    setInputValue(value);
  };

  useDebounce({
    value: inputValue,
    callback: setQuery,
    delay: 300
  });

  return { inputValue, handleChange };
}

export default useInputSearch;
