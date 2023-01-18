import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import useMessage from './hooks/useMessage';

const Container = styled.span`
  font-size: ${pxToRem(12)};

  ${({ theme }) =>
    theme.media.tablet(`
      display: none;
  `)}
`;

function Message() {
  const showMessage = useMessage();

  return showMessage ? (
    <Container>Repository를 검색하여 즐겨찾기에 등록하세요!</Container>
  ) : null;
}

export default Message;
