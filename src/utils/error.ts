import { AxiosError } from 'axios';
import {
  ERROR_FALLBACK_MSG,
  GITHUB_ERROR_MSG_RATE_LIMITING,
  GITHUB_ERROR_MSG_SEARCH_RESULTS_LIMITING,
  GITHUB_ERROR_MSG_SECONDARY_RATE_LIMITING
} from '@constants/error';

export const getErrorType = (
  error: unknown
): keyof typeof ERROR_FALLBACK_MSG | 'none' => {
  if (error === null) {
    return 'none';
  }

  if (!(error instanceof AxiosError)) {
    return 'unknown';
  }

  const errorType = error.response?.data?.documentation_url;
  switch (errorType) {
    case GITHUB_ERROR_MSG_RATE_LIMITING:
      return 'rate_limiting';
    case GITHUB_ERROR_MSG_SECONDARY_RATE_LIMITING:
      return 'secondary_rate_limiting';
    case GITHUB_ERROR_MSG_SEARCH_RESULTS_LIMITING:
      return 'search_results_limiting';
    default:
      return 'unknown';
  }
};
