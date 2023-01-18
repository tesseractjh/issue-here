import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { searchQueryState } from '@recoil/search';
import useDebounce from '@hooks/useDebounce';

function useInputSearch() {
  const [inputValue, setInputValue] = useState('');
  const setQuery = useSetRecoilState(searchQueryState('repository'));

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
