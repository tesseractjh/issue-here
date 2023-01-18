import styled from 'styled-components';
import Loading from '@components/common/Loading';
import pxToRem from '@utils/pxToRem';
import IssueItem from './IssueItem';
import useIssue from './hooks/useIssueList';

const Container = styled.div`
  padding: ${pxToRem(20)};

  ${({ theme }) =>
    theme.media.tablet(`
    padding: ${pxToRem(20, 0)};
  `)}
`;

const List = styled.ul`
  border-top: 1px solid ${({ theme }) => theme.color.BLUE_DARK};
  border-bottom: 1px solid ${({ theme }) => theme.color.BLUE_DARK};

  & > li:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.color.BLUE_DARK};
  }
`;

function IssueList() {
  const { issues, isFetching } = useIssue();

  return (
    <Container>
      <List>
        {issues.map((issue) => (
          <IssueItem key={issue.node_id} issue={issue} />
        ))}
      </List>
      {isFetching && <Loading />}
    </Container>
  );
}

export default IssueList;
