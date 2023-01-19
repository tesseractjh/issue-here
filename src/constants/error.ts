export const GITHUB_ERROR_MSG_RATE_LIMITING =
  'https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting';
export const GITHUB_ERROR_MSG_SECONDARY_RATE_LIMITING =
  'https://docs.github.com/en/free-pro-team@latest/rest/overview/resources-in-the-rest-api#secondary-rate-limits';
export const GITHUB_ERROR_MSG_SEARCH_RESULTS_LIMITING =
  'https://docs.github.com/v3/search/';

export const ERROR_FALLBACK_MSG = {
  rate_limiting: [
    'Github Token의 시간당 요청 제한을 초과하였습니다!',
    '잠시 후에 다시 시도해주세요.'
  ],
  secondary_rate_limiting: [
    'Github Token의 시간당 요청 제한을 초과하였습니다!',
    '몇 분 뒤에 다시 시도해주세요.'
  ],
  search_results_limiting: [
    '최대 열람 가능한 결과 개수를 초과하였습니다!',
    '검색 범위를 좁혀서 다시 시도해주세요.'
  ],
  unknown: ['알 수 없는 오류가 발생했습니다!']
};
