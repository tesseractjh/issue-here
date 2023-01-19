import React from 'react';
import styled from 'styled-components';
import { ReactComponent as WarnIcon } from '@assets/icons/warn.svg';
import pxToRem from '@utils/pxToRem';
import { ERROR_FALLBACK_MSG } from '@constants/error';

interface Props {
  errorType: keyof typeof ERROR_FALLBACK_MSG | 'none';
}

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex()}
  width: 100%;
  height: ${pxToRem(100)};
  font-size: ${pxToRem(16)};
  line-height: 1.4;

  & svg {
    width: ${pxToRem(60)};
    height: ${pxToRem(60)};
    margin-right: ${pxToRem(20)};
    fill: ${({ theme }) => theme.lightColor.RED_DARK};
  }
`;

function ErrorFallback({ errorType }: Props) {
  if (errorType === 'none') {
    return null;
  }

  return (
    <Container>
      <WarnIcon />
      {ERROR_FALLBACK_MSG[errorType].map((msg, index) =>
        index ? (
          <React.Fragment key={msg}>
            <br />
            {msg}
          </React.Fragment>
        ) : (
          msg
        )
      )}
    </Container>
  );
}

export default ErrorFallback;
