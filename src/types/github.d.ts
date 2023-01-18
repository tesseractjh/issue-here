export namespace Github {
  export type Owner = {
    id: number;
    node_id: string;
    login: string;
    avatar_url: string;
    html_url: string;
  };

  export interface Repository {
    node_id: string;
    name: string;
    full_name: string;
    owner: Owner;
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

  export interface ParamsRepository {
    q: string;
    page: number;
  }

  export type State = 'open' | 'closed';
  export type Sort = 'created' | 'updated' | 'comments';
  export type Order = 'asc' | 'desc';
  export type User = {
    node_id: string;
    login: string;
  };

  export interface Issue {
    node_id: string;
    html_url: string;
    number: number;
    user: User;
    state: State;
    comments: number;
    updated_at: string;
    closed_at: string | null;
  }

  export interface ResponseSearchIssue {
    html_url: string;
  }

  export interface ParamsIssue {
    repositories: string[];
    // state: State;
    // title: string;
    // sort: Sort;
    // order: Order;
    page: number;
  }
}
