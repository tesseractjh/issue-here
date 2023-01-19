interface Params {
  totalCount: number;
  perPage: number;
  buttonCount: number;
  page: number;
  setPage: (value: number | ((prev: number) => number)) => void;
}

function usePagination({
  totalCount,
  perPage,
  buttonCount,
  page,
  setPage
}: Params) {
  const totalPage = Math.ceil(totalCount / perPage);

  const pages = [...Array(totalPage < buttonCount ? totalPage : buttonCount)]
    .map(
      (_, index) =>
        Math.floor((page - 1) / buttonCount) * buttonCount + index + 1
    )
    .filter((curPage) => curPage <= totalPage);

  const isFirst = page === 1;
  const isLast = page === totalPage;
  const isPrevDisabled = page <= buttonCount;
  const isNextDisabled =
    !totalPage ||
    Math.floor((page - 1) / buttonCount) ===
      Math.floor((totalPage - 1) / buttonCount);

  const handleClick = (curPage: number) => () => setPage(curPage);

  const handleFirstClick = handleClick(1);
  const handleLastClick = handleClick(totalPage);

  const handlePrevClick = handleClick(
    page > buttonCount ? Math.floor((page - 1) / buttonCount) * buttonCount : 1
  );

  const handleNextClick = handleClick(
    Math.floor((page - 1) / buttonCount + 1) * buttonCount + 1
  );

  return {
    pages,
    isFirst,
    isLast,
    isPrevDisabled,
    isNextDisabled,
    handleClick,
    handleFirstClick,
    handleLastClick,
    handlePrevClick,
    handleNextClick
  };
}

export default usePagination;
