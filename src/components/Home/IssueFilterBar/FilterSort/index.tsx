import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import InputFilterSort from './InputFilterSort';
import useFilterSort from './hooks/useFilterSort';
import IssueFilter from '../IssueFilter';

const Content = styled.div`
  ${({ theme }) =>
    theme.mixin.flexColumn('flex-start', 'flex-start', pxToRem(10))}
  width: ${pxToRem(200)};
  padding: ${pxToRem(16)};
`;

function FilterSortState() {
  const { curValue, setValue, handleClear } = useFilterSort();

  return (
    <IssueFilter id="sort" triggerContent="Sort" onClear={handleClear}>
      <Content>
        <InputFilterSort
          value="updated"
          curValue={curValue}
          setValue={setValue}
        >
          업데이트
        </InputFilterSort>
        <InputFilterSort
          value="created"
          curValue={curValue}
          setValue={setValue}
        >
          작성 시간
        </InputFilterSort>
        <InputFilterSort
          value="comments"
          curValue={curValue}
          setValue={setValue}
        >
          댓글 수
        </InputFilterSort>
      </Content>
    </IssueFilter>
  );
}

export default FilterSortState;
