import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import type { FilterRepositoryState } from '@recoil/filter';
import { filterRepositoryState } from '@recoil/filter';

function useFavoriteList() {
  const [favorites, setFavorites] = useRecoilState(filterRepositoryState);

  const handleClick = useCallback(
    ({
        owner: curOwner,
        repo: curRepo
      }: Pick<FilterRepositoryState, 'owner' | 'repo'>) =>
      () => {
        setFavorites((prev) => {
          const index = prev.findIndex(
            ({ owner, repo }) => owner === curOwner && repo === curRepo
          );
          return [...prev.slice(0, index), ...prev.slice(index + 1)];
        });
      },
    [setFavorites]
  );

  return { favorites, handleClick };
}

export default useFavoriteList;
