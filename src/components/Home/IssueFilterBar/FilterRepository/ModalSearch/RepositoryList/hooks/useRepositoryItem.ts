import { useState, useCallback } from 'react';
import type { FilterRepositoryState } from '@recoil/filter';
import useComponentDidMount from '@hooks/useComponentDidMount';

interface Params {
  targetRepo: Pick<FilterRepositoryState, 'ownerId' | 'owner' | 'repo'>;
  setFavorite: (
    repoState: Pick<FilterRepositoryState, 'owner' | 'repo'>,
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  toggleFavorite: (
    repoState: Pick<FilterRepositoryState, 'ownerId' | 'owner' | 'repo'>,
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<React.MouseEventHandler>;
}

function useRepositoryItem({
  targetRepo,
  setFavorite,
  toggleFavorite
}: Params) {
  const [isFavorite, setIsFavorite] = useState(false);

  const initiateFavorite = useCallback(async () => {
    await setFavorite(targetRepo, setIsFavorite);
  }, [setFavorite, targetRepo, setIsFavorite]);

  const handleClick = async (event: React.MouseEvent) => {
    (await toggleFavorite(targetRepo, setIsFavorite))(event);
  };

  useComponentDidMount(initiateFavorite);

  return { isFavorite, handleClick };
}

export default useRepositoryItem;
