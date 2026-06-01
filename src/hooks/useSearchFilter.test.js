import { describe, it, expect } from 'vitest';
import { useSearchFilter } from './useSearchFilter';

const countries = [
  {
    name: { common: 'India' },
    region: 'Asia',
  },
  {
    name: { common: 'Germany' },
    region: 'Europe',
  },
  {
    name: { common: 'Japan' },
    region: 'Asia',
  },
];

describe('useSearchFilter', () => {
  it('filters by search query', () => {
    const result = useSearchFilter(countries, 'India');

    expect(result).toHaveLength(1);
    expect(result[0].name.common).toBe('India');
  });

  it('filters by region', () => {
    const result = useSearchFilter(countries, '', 'Asia');

    expect(result).toHaveLength(2);
    expect(result.every((country) => country.region === 'Asia')).toBe(true);
  });

  it('filters by search query and region together', () => {
    const result = useSearchFilter(countries, 'Japan', 'Asia');

    expect(result).toHaveLength(1);
    expect(result[0].name.common).toBe('Japan');
  });

  it('performs case-insensitive search', () => {
    const result = useSearchFilter(countries, 'india');

    expect(result).toHaveLength(1);
    expect(result[0].name.common).toBe('India');
  });

  it('returns all countries when query and region are empty', () => {
    const result = useSearchFilter(countries);

    expect(result).toHaveLength(3);
  });

  it('returns empty array when no country matches', () => {
    const result = useSearchFilter(countries, 'Brazil');

    expect(result).toEqual([]);
  });

  it('returns empty array for invalid dataList', () => {
    expect(useSearchFilter(null)).toEqual([]);
    expect(useSearchFilter(undefined)).toEqual([]);
    expect(useSearchFilter({})).toEqual([]);
  });
});
