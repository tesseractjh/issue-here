import styled, { css } from 'styled-components';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import Spinner from '@components/common/Spinner';
import pxToRem from '@utils/pxToRem';
import RepositoryItem from './RepositoryItem';
import useRepositoryList from './hooks/useRepositoryList';

const Container = styled.ul`
  ${({ theme }) => theme.mixin.flexColumn('flex-start', 'stretch', pxToRem(10))}
  padding: ${pxToRem(0, 10)};
`;

const NoResult = styled.div`
  ${({ theme }) => theme.placeholder.absoluteCenter}
  font-size: ${pxToRem(16)};
`;

const FallbackWrapper = styled.div<{ isEmpty: boolean }>`
  ${({ theme }) => theme.mixin.flex()}
  text-align: center;

  ${({ isEmpty, theme }) => isEmpty && theme.placeholder.absoluteCenter}
`;

function RepositoryList() {
  const { query, data, isFetching, handleIntersect } = useRepositoryList();
  const target = useInfiniteScroll<HTMLUListElement>({
    data,
    targetLastIndex: 5,
    onIntersect: handleIntersect,
    options: { threshold: 0.1 }
  });

  return (
    <Container ref={target}>
      {data.map((item) => (
        <RepositoryItem key={item.node_id} item={item} query={query} />
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
