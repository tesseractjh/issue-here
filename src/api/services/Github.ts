import type { Github } from 'src/types/github';
import axios from 'axios';
import { URL_GITHUB_API } from '@constants/URL';
import { GITHUB_REPOSITORY_PER_PAGE } from '@constants/github';

const instance = axios.create({
  baseURL: URL_GITHUB_API,
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_API_TOKEN}`
  },
  timeout: 10 * 1000
});

export const findRepoByName = async (params: Github.ParamsRepository) => {
  const { data } = await instance.get<Github.ResponseSearchRepository>(
    '/search/repositories',
    {
      params: {
        ...params,
        q: `${params.q} in:name`,
        per_page: GITHUB_REPOSITORY_PER_PAGE
      }
    }
  );
  return data;
};
