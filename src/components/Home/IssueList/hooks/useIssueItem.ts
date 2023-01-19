import type { Github } from 'src/types/github';

function useIssueItem({ repository_url: repoURL }: Github.Issue) {
  const repo = repoURL.split('/').slice(-2).join('/');

  return { repo };
}

export default useIssueItem;
