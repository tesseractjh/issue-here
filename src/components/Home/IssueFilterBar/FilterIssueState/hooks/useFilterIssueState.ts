import { useSetRecoilState } from 'recoil';
import { filterIssueStateState } from '@recoil/filter';

function useFilterIssueState() {
  const setFilter = useSetRecoilState(filterIssueStateState);
  const handleClear = () => setFilter({ open: true });

  return handleClear;
}

export default useFilterIssueState;
