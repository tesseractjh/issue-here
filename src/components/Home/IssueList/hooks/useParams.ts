import type { FilterState } from '@recoil/filter';

function useParams(filter: FilterState | null) {
  if (!filter) {
    return null;
  }

  const { repositories } = filter;
  const repo = repositories.map((repository) => `repo:${repository}`).join(' ');

  return { q: repo };
}

export default useParams;
