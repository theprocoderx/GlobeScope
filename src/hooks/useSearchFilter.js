export function useSearchFilter(dataList, query = '', region = '') {
  if (!Array.isArray(dataList)) return [];

  const q = query.trim().toLowerCase();
  const r = region.trim().toLowerCase();

  return dataList.filter((data) => {
    const name = (data.name?.common || '').toLowerCase();
    const regionName = (data.region || '').toLowerCase();

    const matchesQuery = q ? name.includes(q) : true;
    const matchesRegion = r ? regionName.includes(r) : true;

    return matchesQuery && matchesRegion;
  });
}
