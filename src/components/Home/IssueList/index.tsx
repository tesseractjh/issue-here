import styled from 'styled-components';
import ErrorFallback from '@components/common/ErrorFallback';
import Loading from '@components/common/Loading';
import IssueItem from './IssueItem';
import pxToRem from '@utils/pxToRem';
import IssuePagination from './IssuePagination';
import useIssue from './hooks/useIssueList';

const Container = styled.div`
  padding: ${pxToRem(20)};

  ${({ theme }) =>
    theme.media.tablet(`
    padding: ${pxToRem(20, 0)};
  `)}
`;

const NoResult = styled.div`
  ${({ theme }) => theme.mixin.flex()}
  height: ${pxToRem(300)};
  font-size: ${pxToRem(16)};
`;

const List = styled.ul`
  border-top: 1px solid ${({ theme }) => theme.color.BLUE_DARK};
  border-bottom: 1px solid ${({ theme }) => theme.color.BLUE_DARK};

  & > li:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.color.BLUE_DARK};
  }
`;

function IssueList() {
  const { issues, isFetching, errorType, totalCount, page, setPage } =
    useIssue();

  return (
    <Container>
      <List>
        {!issues.length && errorType === 'none' && (
          <NoResult>등록된 이슈가 없습니다.</NoResult>
        )}
        {issues.map((issue) => (
          <IssueItem key={issue.node_id} issue={issue} />
        ))}
        <ErrorFallback errorType={errorType} />
      </List>
      <IssuePagination totalCount={totalCount} page={page} setPage={setPage} />
      {isFetching && <Loading />}
    </Container>
  );
}

export default IssueList;
