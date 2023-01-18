import styled, { css } from 'styled-components';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import Spinner from '@components/common/Spinner';
import RepositoryItem from './RepositoryItem';
import pxToRem from '@utils/pxToRem';
import useRepositoryItemProps from './hooks/useRepositoryItemProps';
import useRepositoryList from './hooks/useRepositoryList';
import { MODAL_HEADER_HEIGHT } from '@constants/style';

const Container = styled.ul`
  overflow-y: auto;
  overscroll-behavior: contain;
  height: ${pxToRem(400)};
  padding: ${pxToRem(0, 10)};
  margin-top: ${pxToRem(10)};

  & > li:not(:first-child) {
    margin-top: ${pxToRem(10)};
  }

  ${({ theme }) =>
    theme.media.tablet(css`
      height: calc(100vh - ${pxToRem(MODAL_HEADER_HEIGHT)});
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    `)}
`;

const NoResult = styled.div`
  ${({ theme }) => theme.placeholder.absoluteCenter}
  font-size: ${pxToRem(16)};
`;

const FallbackWrapper = styled.div<{ isEmpty: boolean }>`
  ${({ theme }) => theme.mixin.flex()}
  height: ${pxToRem(100)};

  ${({ isEmpty, theme }) => isEmpty && theme.placeholder.absoluteCenter}

  ${({ theme }) =>
    theme.media.tablet(css`
      margin-bottom: ${pxToRem(80)};
    `)}
`;

function RepositoryList() {
  const { query, data, isFetching, handleIntersect } = useRepositoryList();
  const itemProps = useRepositoryItemProps();

  const target = useInfiniteScroll<HTMLUListElement>({
    data,
    targetLastIndex: 5,
    onIntersect: handleIntersect,
    options: { threshold: 0.1 }
  });

  return (
    <Container ref={target}>
      {data.map((item) => (
        <RepositoryItem
          key={item.node_id}
          item={item}
          query={query}
          {...itemProps}
        />
      ))}
      {!data.length && !isFetching && (
        <NoResult>검색 결과가 없습니다.</NoResult>
      )}
      {isFetching && (
        <FallbackWrapper isEmpty={!data.length}>
          <Spinner />
        </FallbackWrapper>
      )}
    </Container>
  );
}

export default RepositoryList;
