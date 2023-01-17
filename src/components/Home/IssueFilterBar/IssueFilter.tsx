import Filter from '@components/common/Filter';

interface Props extends React.PropsWithChildren {
  id: string;
  triggerContent: string;
  onClose?: () => void;
}

function IssueFilter({ id, triggerContent, onClose, children }: Props) {
  return (
    <Filter id={`filter-${id}`} onClose={onClose}>
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
