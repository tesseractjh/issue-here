import InputCheckbox from '@components/common/Input/InputCheckbox';
import useInputIssueState from './hooks/useInputIssueState';

interface Props extends React.PropsWithChildren {
  value: string;
}

function InputIssueState({ value, children }: Props) {
  const { checked, setChecked } = useInputIssueState(value);
  return (
    <InputCheckbox size="large" checked={checked} setChecked={setChecked}>
      {children}
    </InputCheckbox>
  );
}

export default InputIssueState;
