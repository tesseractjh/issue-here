import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';
import useCheckbox from '../hooks/useCheckbox';

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  checked: boolean;
  setChecked: (value: boolean | ((prev: boolean) => boolean)) => void;
  checkedContent?: React.ReactNode;
  uncheckedContent?: React.ReactNode;
}

const Container = styled.label`
  ${({ theme }) => theme.mixin.inlineFlex('space-between')}
  position: relative;
  width: ${pxToRem(50)};
  height: ${pxToRem(24)};
  padding: ${pxToRem(2, 4)};
  border-radius: ${pxToRem(12)};
  background-color: ${({ theme }) => theme.color.GRAY};
  cursor: pointer;
  user-select: none;

  &:hover .switch-toggle-track-thumb {
    border-color: transparent;
    box-shadow: 0 0 2px 3px ${({ theme }) => theme.lightColor.BLUE};
  }
`;

const TrackThumb = styled.span<{ checked?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate3d(${pxToRem(2)}, ${pxToRem(2)}, 0);
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  border: 1px solid ${({ theme }) => theme.lightColor.GRAY_DARK};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.WHITE};
  transition: transform 0.25s ease-in-out;

  ${({ checked }) =>
    checked &&
    css`
      transform: translate3d(${pxToRem(28)}, ${pxToRem(2)}, 0);
    `}
`;

const Content = styled.span`
  display: inline-block;
  width: ${pxToRem(16)};
  height: ${pxToRem(16)};
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.color.BACKGROUND_LIGHT};

  & svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.color.BACKGROUND_LIGHT};
  }
`;

function ToggleSwitch({
  checked,
  setChecked,
  checkedContent = '',
  uncheckedContent = '',
  ...attributes
}: Props) {
  const { handleChange, handleKeyDown } = useCheckbox(setChecked);

  return (
    <Container className="switch-toggle">
      <Content>{checkedContent}</Content>
      <Content>{uncheckedContent}</Content>
      <TrackThumb className="switch-toggle-track-thumb" checked={checked} />
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...attributes}
      />
    </Container>
  );
}

export default ToggleSwitch;
