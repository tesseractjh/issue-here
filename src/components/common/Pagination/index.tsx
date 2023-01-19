import styled, { css } from 'styled-components';
import { ReactComponent as ChevronIcon } from '@assets/icons/chevron.svg';
import pxToRem from '@utils/pxToRem';
import ButtonPage from './ButtonPage';
import usePagination from './hooks/usePagination';

interface Props {
  totalCount: number;
  perPage: number;
  buttonCount: number;
  page: number;
  setPage: (value: number | ((prev: number) => number)) => void;
}

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'center', pxToRem(10))}
  padding: ${pxToRem(10)};
  margin-top: ${pxToRem(20)};

  & > button {
    position: relative;

    &:first-child {
      margin-right: ${pxToRem(6)};
    }

    &:last-child {
      margin-left: ${pxToRem(6)};
    }
  }

  & svg {
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
  }

  & svg.double {
    position: absolute;
    top: 50%;
    transform-origin: center;

    &.double-left {
      left: calc(50% - ${pxToRem(4)});
    }

    &.double-right {
      left: calc(50% + ${pxToRem(4)});
    }

    &.button-pagination-left {
      transform: translate(-50%, -50%) rotate(90deg);
    }

    &.button-pagination-right {
      transform: translate(-50%, -50%) rotate(270deg);
    }
  }

  & .button-pagination-left {
    transform: rotate(90deg);
  }

  & .button-pagination-right {
    transform: rotate(270deg);
  }

  ${({ theme }) =>
    theme.media.tablet(css`
      gap: ${pxToRem(6)};
      padding: ${pxToRem(10, 0)};
      margin-top: ${pxToRem(10)};

      & svg {
        width: ${pxToRem(14)};
        height: ${pxToRem(14)};
      }

      & > button {
        &:first-child {
          margin-right: ${pxToRem(4)};
        }

        &:last-child {
          margin-left: ${pxToRem(4)};
        }
      }

      & svg.double {
        &.double-left {
          left: calc(50% - ${pxToRem(3)});
        }

        &.double-right {
          left: calc(50% + ${pxToRem(3)});
        }
      }
    `)}
`;

function Pagination({ page, setPage, ...props }: Props) {
  const {
    pages,
    isFirst,
    isLast,
    isPrevDisabled,
    isNextDisabled,
    handleClick,
    handlePrevClick,
    handleNextClick,
    handleFirstClick,
    handleLastClick
  } = usePagination({ page, setPage, ...props });
  return (
    <Container>
      <ButtonPage disabled={isFirst} onClick={handleFirstClick}>
        <ChevronIcon className="double double-left button-pagination-left" />
        <ChevronIcon className="double double-right button-pagination-left" />
      </ButtonPage>
      <ButtonPage disabled={isPrevDisabled} onClick={handlePrevClick}>
        <ChevronIcon className="button-pagination-left" />
      </ButtonPage>
      {pages.map((curPage) => (
        <ButtonPage
          key={`button-page-${curPage}`}
          isSelected={page === curPage}
          onClick={handleClick(curPage)}
        >
          {curPage}
        </ButtonPage>
      ))}
      <ButtonPage disabled={isNextDisabled} onClick={handleNextClick}>
        <ChevronIcon className="button-pagination-right" />
      </ButtonPage>
      <ButtonPage disabled={isLast} onClick={handleLastClick}>
        <ChevronIcon className="double double-left button-pagination-right" />
        <ChevronIcon className="double double-right button-pagination-right" />
      </ButtonPage>
    </Container>
  );
}

export default Pagination;
