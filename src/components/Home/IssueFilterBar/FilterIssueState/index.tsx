import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import InputIssueState from './InputIssueState';
import useFilterIssueState from './hooks/useFilterIssueState';
import IssueFilter from '../IssueFilter';

const Content = styled.div`
  ${({ theme }) =>
    theme.mixin.flexColumn('flex-start', 'flex-start', pxToRem(10))}
  width: ${pxToRem(200)};
  padding: ${pxToRem(16)};
`;

function FilterIssueState() {
  const { handleClear } = useFilterIssueState();

  return (
    <IssueFilter id="state" triggerContent="Open/Closed" onClear={handleClear}>
      <Content>
        <InputIssueState value="open">Open</InputIssueState>
        <InputIssueState value="closed">Closed</InputIssueState>
      </Content>
    </IssueFilter>
  );
}

export default FilterIssueState;
