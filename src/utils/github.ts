import type { FilterState } from '@recoil/filter';

const PARAM_KEYS = ['page', 'sort', 'order'];

export const getQualifier = (filter: FilterState) =>
  filter.repo.length
    ? Object.entries(filter)
        .filter(([key]) => !PARAM_KEYS.includes(key))
        .map(([key, value]) => {
          if (Array.isArray(value)) {
            return value.map((elem) => `${key}:${elem}`).join(' ');
          }
          return `${key}:${value}`;
        })
        .join(' ')
        .trim()
    : '';
