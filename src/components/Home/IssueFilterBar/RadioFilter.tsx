import styled from 'styled-components';
import InputRadio from '@components/common/Input/InputRadio';
import pxToRem from '@utils/pxToRem';
import IssueFilter from './IssueFilter';

interface Props<T>
  extends React.ComponentProps<typeof IssueFilter>,
    Pick<React.ComponentProps<typeof InputRadio<T>>, 'curValue' | 'setValue'> {
  values: T[];
  contents: string[];
}

const Content = styled.div`
  ${({ theme }) =>
    theme.mixin.flexColumn('flex-start', 'flex-start', pxToRem(10))}
  width: ${pxToRem(200)};
  padding: ${pxToRem(16)};
`;

function RadioFilter<T>({
  curValue,
  setValue,
  values,
  contents,
  ...props
}: Props<T>) {
  return (
    <IssueFilter {...props}>
      <Content>
        {values.map((value, index) => (
          <InputRadio
            key={String(value)}
            size="medium"
            name="sort"
            value={value}
            curValue={curValue}
            setValue={setValue}
          >
            {contents[index]}
          </InputRadio>
        ))}
      </Content>
    </IssueFilter>
  );
}

export default RadioFilter;
