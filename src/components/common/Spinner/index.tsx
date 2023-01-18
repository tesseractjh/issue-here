import styled, { keyframes } from 'styled-components';
import pxToRem from '@utils/pxToRem';

const Container = styled.span`
  display: inline-block;
  position: relative;
  width: ${pxToRem(100)};
  height: ${pxToRem(100)};
`;

const spinnerAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const SpinnerQuarter = styled.span<{ delay?: number }>`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  border: ${pxToRem(10)} solid;
  border-color: ${({ theme }) => theme.lightColor.BLUE} transparent transparent
    transparent;
  border-radius: 50%;
  animation: ${spinnerAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  animation-delay: ${({ delay }) => delay ?? 0}s;

  ${({ theme }) =>
    theme.media.tablet(`
    border-width: ${pxToRem(8)};
  `)}

  ${({ theme }) =>
    theme.media.mobile(`
    border-width: ${pxToRem(6)};
  `)}
`;

function Spinner() {
  return (
    <Container>
      <SpinnerQuarter delay={-0.4} />
      <SpinnerQuarter delay={-0.3} />
      <SpinnerQuarter delay={-0.2} />
      <SpinnerQuarter delay={-0.1} />
      <SpinnerQuarter />
    </Container>
  );
}

export default Spinner;
