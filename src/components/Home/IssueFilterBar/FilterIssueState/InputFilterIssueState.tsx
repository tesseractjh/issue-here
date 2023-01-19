import InputCheckbox from '@components/common/Input/InputCheckbox';
import useInputFilterIssueState from './hooks/useInputFilterIssueState';

interface Props extends React.PropsWithChildren {
  value: string;
}

function InputFilterIssueState({ value, children }: Props) {
  const { checked, setChecked } = useInputFilterIssueState(value);
  return (
    <InputCheckbox size="large" checked={checked} setChecked={setChecked}>
      {children}
    </InputCheckbox>
  );
}

export default InputFilterIssueState;
