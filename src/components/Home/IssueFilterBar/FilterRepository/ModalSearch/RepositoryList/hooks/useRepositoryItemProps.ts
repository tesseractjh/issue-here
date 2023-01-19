import { useRecoilCallback } from 'recoil';
import type { FilterRepositoryState } from '@recoil/filter';
import { filterRepositoryState } from '@recoil/filter';

const MAX_REPO_LENGTH = 4;

function useRepositoryItemProps() {
  const setFavorite = useRecoilCallback(
    ({ snapshot }) =>
      async (
        { owner, repo }: Pick<FilterRepositoryState, 'owner' | 'repo'>,
        setter: React.Dispatch<React.SetStateAction<boolean>>
      ) => {
        const repos = await snapshot.getPromise(filterRepositoryState);
        const isFavorite = !!repos.find(
          ({ owner: curOwner, repo: curRepo }) =>
            owner === curOwner && repo === curRepo
        );
        setter(isFavorite);
      },
    []
  );

  const toggleFavorite = useRecoilCallback(
    ({ snapshot, set }) =>
      async (
        repoState: Pick<FilterRepositoryState, 'ownerId' | 'owner' | 'repo'>,
        setter: React.Dispatch<React.SetStateAction<boolean>>
      ) => {
        const repos = await snapshot.getPromise(filterRepositoryState);
        return () => {
          const duplicate = repos.find(
            ({ owner, repo }) =>
              owner === repoState.owner && repo === repoState.repo
          );

          if (duplicate) {
            set(filterRepositoryState, (prev) =>
              prev.filter((repo) => repo !== duplicate)
            );
            setter(false);
            return;
          }

          if (repos.length === MAX_REPO_LENGTH) {
            alert('즐겨찾기 목록이 가득 찼습니다!');
            return;
          }

          set(filterRepositoryState, (prev) => [
            ...prev,
            { ...repoState, selected: true }
          ]);
          setter(true);
        };
      },
    []
  );

  return { setFavorite, toggleFavorite };
}

export default useRepositoryItemProps;
