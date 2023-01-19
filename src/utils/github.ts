import type { FilterState } from '@recoil/filter';

export const getQualifier = (filter: FilterState) =>
  Object.entries(filter)
    .filter(([key]) => key !== 'page')
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value.map((elem) => `${key}:${elem}`).join(' ');
      }
      return `${key}:${value}`;
    })
    .join(' ')
    .trim();
