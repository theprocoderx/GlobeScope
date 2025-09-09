import { describe, it, expect } from 'vitest';
import { useSearchFilter } from '../hooks/useSearchFilter';

const mockCountries = [
  { name: { common: 'India' }, region: 'Asia' },
  { name: { common: 'Germany' }, region: 'Europe' },
  { name: { common: 'Japan' }, region: 'Asia' },
];

describe('useSearchFilter', () => {
  it('filters by search query', () => {
    const result = useSearchFilter(mockCountries, 'ind', '');
    expect(result).toHaveLength(1);
    expect(result[0].name.common).toBe('India');
  });

  it('filters by region', () => {
    const result = useSearchFilter(mockCountries, '', 'Asia');
    expect(result).toHaveLength(2);
  });

  it('filters by search and region together', () => {
    const result = useSearchFilter(mockCountries, 'ja', 'Asia');
    expect(result).toHaveLength(1);
    expect(result[0].name.common).toBe('Japan');
  });
});
