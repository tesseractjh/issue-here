import useIssueFilter from '@hooks/useIssueFilter';
import Filter from '@components/common/Filter';

interface Props extends React.PropsWithChildren {
  id: string;
  triggerContent: string;
  onClear: () => void;
  onClose?: () => void;
}

function IssueFilter({
  id,
  triggerContent,
  onClear,
  onClose,
  children
}: Props) {
  const handleApply = useIssueFilter();

  return (
    <Filter id={`filter-${id}`} onClose={onClose}>
      <Filter.Trigger content={triggerContent} />
      <Filter.Popup onClear={onClear} onApply={handleApply}>
        {children}
      </Filter.Popup>
    </Filter>
  );
}

export default IssueFilter;
