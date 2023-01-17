import { useRecoilState } from 'recoil';
import { filterRepositoryState } from '@recoil/filter';

interface Params {
  ownerId: number;
  owner: string;
  repo: string;
}

const MAX_REPO_LENGTH = 4;

function useRepositoryItem({
  ownerId,
  owner: curOwner,
  repo: curRepo
}: Params) {
  const [repos, setRepos] = useRecoilState(filterRepositoryState);
  const duplicate = repos.find(
    ({ owner, repo }) => owner === curOwner && repo === curRepo
  );

  const handleClick = () => {
    if (duplicate) {
      setRepos((prev) => prev.filter((repo) => repo !== duplicate));
      return;
    }

    if (repos.length === MAX_REPO_LENGTH) {
      alert('즐겨찾기 목록이 가득 찼습니다!');
      return;
    }

    setRepos((prev) => [...prev, { ownerId, owner: curOwner, repo: curRepo }]);
  };

  return { isFavorite: !!duplicate, handleClick };
}

export default useRepositoryItem;
