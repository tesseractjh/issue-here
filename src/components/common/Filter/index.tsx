import styled from 'styled-components';
import FilterContext from './FilterContext';
import FilterPopup from './FilterPopup';
import FilterTrigger from './FilterTrigger';
import useFilter from './hooks/useFilter';

interface Props extends React.PropsWithChildren {
  id: string;
  onClose?: () => void;
}

const Container = styled.span`
  display: inline-block;
  position: relative;
`;

function Filter({ id, onClose: handleClose, children }: Props) {
  const value = useFilter({ id, handleClose });

  return (
    <FilterContext.Provider value={value}>
      <Container id={id}>{children}</Container>
    </FilterContext.Provider>
  );
}

Filter.Trigger = FilterTrigger;
Filter.Popup = FilterPopup;

export default Filter;
