import styled from 'styled-components';
import InputText from '@components/common/Input/InputText';
import { ReactComponent as MagIcon } from '@assets/icons/mag.svg';
import pxToRem from '@utils/pxToRem';
import useInputSearch from './hooks/useInputSearch';

const Container = styled.div`
  position: relative;

  & > svg {
    position: absolute;
    top: 50%;
    left: ${pxToRem(10)};
    transform: translateY(-50%);
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
    fill: ${({ theme }) => theme.color.INPUT_TEXT};
  }

  & input[type='text'] {
    width: 100%;
    padding-left: ${pxToRem(40)};

    &:focus + svg {
      fill: ${({ theme }) => theme.lightColor.BLUE};
    }
  }
`;

function InputSearch() {
  const { inputValue, handleChange } = useInputSearch();

  return (
    <Container>
      <InputText
        size="medium"
        variant="outlined"
        placeholder="Repository 이름을 입력하세요"
        maxLength={255}
        spellCheck={false}
        autoFocus
        value={inputValue}
        onChange={handleChange}
      />
      <MagIcon />
    </Container>
  );
}

export default InputSearch;
