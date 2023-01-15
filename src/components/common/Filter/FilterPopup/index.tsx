import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import ButtonApply from './ButtonApply';
import ButtonClear from './ButtonClear';
import useFilterContext from '../hooks/useFilterContext';
import usePopup from '../hooks/usePopup';

interface Props extends React.PropsWithChildren {
  onClear: React.ComponentProps<typeof ButtonClear>['onClick'];
  onApply: React.ComponentProps<typeof ButtonApply>['onClick'];
}

const Container = styled.div`
  overflow: hidden;
  position: absolute;
  top: calc(100% + ${pxToRem(4)});
  left: 0;
  z-index: 10;
  width: fit-content;
  border: 1px solid ${({ theme }) => theme.color.BORDER_DARK};
  border-radius: ${pxToRem(4)};
  box-shadow: 0 12px 24px 0 rgb(0 0 0 / 15%);
`;

const Top = styled.div`
  padding: ${pxToRem(16)};
  border-bottom: 1px solid ${({ theme }) => theme.color.BORDER_DARK};
`;

const Bottom = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-end', 'center', pxToRem(16))}
  padding: ${pxToRem(16)};
`;

function FilterPopup({ onClear, onApply, children }: Props) {
  const { id, isOpen, setIsOpen } = useFilterContext();
  usePopup({ id, isOpen, setIsOpen });

  if (!isOpen) {
    return null;
  }

  return (
    <Container id={`popup-${id}`}>
      <Top>{children}</Top>
      <Bottom>
        <ButtonClear onClick={onClear} />
        <ButtonApply onClick={onApply} />
      </Bottom>
    </Container>
  );
}

export default FilterPopup;