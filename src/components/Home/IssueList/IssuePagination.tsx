import Pagination from '@components/common/Pagination';
import { GITHUB_ISSUE_PER_PAGE } from '@constants/github';

function IssuePagination({
  totalCount,
  page,
  setPage
}: Pick<
  React.ComponentProps<typeof Pagination>,
  'totalCount' | 'page' | 'setPage'
>) {
  return (
    <Pagination
      totalCount={totalCount}
      perPage={GITHUB_ISSUE_PER_PAGE}
      page={page}
      setPage={setPage}
      buttonCount={5}
    />
  );
}

export default IssuePagination;
