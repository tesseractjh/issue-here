export namespace Github {
  export type Owner = {
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
}
