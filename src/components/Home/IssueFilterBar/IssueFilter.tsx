import Filter from '@components/common/Filter';

interface Props extends React.PropsWithChildren {
  id: string;
  triggerContent: string;
}

function IssueFilter({ id, triggerContent, children }: Props) {
  return (
    <Filter id={id}>
      <Filter.Trigger content={triggerContent} />
      <Filter.Popup
        onClear={() => console.log('clear')}
        onApply={() => console.log('apply')}
      >
        {children}
      </Filter.Popup>
    </Filter>
  );
}

export default IssueFilter;
