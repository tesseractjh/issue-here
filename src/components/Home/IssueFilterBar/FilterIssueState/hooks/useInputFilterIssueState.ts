import { useRecoilState } from 'recoil';
import type { FilterIssueStateState } from '@recoil/filter';
import { filterIssueStateState } from '@recoil/filter';

const hasOnlyThisOption = (prev: FilterIssueStateState, value: string) =>
  Object.values(prev).filter(Boolean).length === 1 && prev[value];

function useInputFilterIssueState(val: string) {
  const [issueState, setIssueState] = useRecoilState(filterIssueStateState);
  const checked = !!issueState[val];

  const setChecked = (value: boolean | ((prev: boolean) => boolean)) => {
    if (typeof value === 'boolean') {
      setIssueState((prev) => {
        if (hasOnlyThisOption(prev, val)) {
          return prev;
        }
        return { ...prev, [val]: value };
      });
    } else {
      setIssueState((prev) => {
        if (hasOnlyThisOption(prev, val)) {
          return prev;
        }
        return { ...prev, [val]: value(prev[val]) };
      });
    }
  };

  return { checked, setChecked };
}

export default useInputFilterIssueState;
