import { useRecoilState } from 'recoil';
import { FilterRepositoryState, repositorySelectedState } from '@recoil/filter';

function useFavoriteItem(
  repoState: Pick<FilterRepositoryState, 'owner' | 'repo'>
) {
  return useRecoilState(repositorySelectedState(repoState));
}

export default useFavoriteItem;
