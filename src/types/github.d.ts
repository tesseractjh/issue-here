export namespace Github {
  export type User = {
    id: number;
    node_id: string;
    login: string;
    avatar_url: string;
    html_url: string;
  };

  export type Sort = 'updated' | 'created' | 'comments';
  export type Order = 'asc' | 'desc';

  export interface Repository {
    node_id: string;
    name: string;
    full_name: string;
    owner: User;
    html_url: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    topics: Array<string>;
  }

  export interface ResponseSearchRepository {
    total_count: number;
    incomplete_results: boolean;
    items: Repository[];
  }

  export interface Params {
    q: string;
    page: number;
    sort: Sort;
    order: Order;
  }

  export interface Issue {
    node_id: string;
    html_url: string;
    repository_url: string;
    number: number;
    title: string;
    user: User;
    state: string;
    comments: number;
    created_at: string;
    closed_at: string | null;
  }

  export interface ResponseSearchIssue {
    total_count: number;
    incomplete_results: boolean;
    items: Issue[];
  }

  export interface IssueFilter {
    repo: string[];
    state: string[];
    sort: Sort;
    order: Order;
    page: number;
  }
}
