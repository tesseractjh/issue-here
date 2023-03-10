import styled from 'styled-components';
import Button from '@components/common/Button';
import { ReactComponent as ChevronIcon } from '@assets/icons/chevron.svg';
import pxToRem from '@utils/pxToRem';
import useFilterContext from './hooks/useFilterContext';

interface Props {
  content: string;
}

const Content = styled.span`
  ${({ theme }) => theme.mixin.inlineFlex()}

  & svg {
    width: ${pxToRem(14)};
    height: ${pxToRem(14)};
    margin-left: ${pxToRem(14)};
    fill: ${({ theme }) => theme.color.INPUT_TEXT};
  }
`;

function FilterTrigger({ content }: Props) {
  const { id, isOpen, handleClick } = useFilterContext();

  return (
    <Button
      size="medium"
      variant="outlined"
      elementType="button"
      theme="normal"
      onClick={handleClick}
      aria-haspopup
      aria-expanded={isOpen}
      aria-controls={`popup-${id}`}
    >
      <Content>
        {content}
        <ChevronIcon />
      </Content>
    </Button>
  );
}

export default FilterTrigger;
