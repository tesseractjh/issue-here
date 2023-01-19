import InputRadio from '@components/common/Input/InputRadio';

interface Props<T> extends React.PropsWithChildren {
  value: T;
  curValue: T;
  setValue: React.ComponentProps<typeof InputRadio<T>>['setValue'];
}

function InputFilterSort<T>({ value, curValue, setValue, children }: Props<T>) {
  return (
    <InputRadio
      size="medium"
      name="sort"
      value={value}
      curValue={curValue}
      setValue={setValue}
    >
      {children}
    </InputRadio>
  );
}

export default InputFilterSort;
