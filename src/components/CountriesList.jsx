import { useEffect, useState } from 'react';
import CountriesListShimmer from './CountriesListShimmer';
import CountryCard from './CountryCard';
import { useSearchFilter } from '../hooks/useSearchFilter';

export default function CountriesList({ searchQuery, region }) {
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const filteredCountries = useSearchFilter(countriesData, searchQuery, region);

  useEffect(() => {
    const startTime = Date.now();
    fetch(
      'https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,flags,currencies,languages,borders'
    )
      .then((res) => res.json())
      .then((data) => {
        const elapsed = Date.now() - startTime;
        const minDelay = 400; //300 - 500 is safe range
        if (elapsed < minDelay) {
          setTimeout(() => {
            setCountriesData(data);
            setLoading(false);
          }, minDelay - elapsed);
        } else {
          setCountriesData(data);
          setLoading(false);
        }
      });
  }, []);

  if (loading) {
    return <CountriesListShimmer />;
  }

  return (
    <>
      <div className='m-4 mx-auto grid w-full max-w-7xl [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))] justify-items-center gap-8 p-4'>
        {filteredCountries.map((country) => {
          return (
            <CountryCard
              key={country.name?.common ?? 'Unknown'}
              name={country.name?.common ?? 'Unknown'}
              flag={country.flags?.svg ?? ''}
              population={country.population ?? 0}
              region={country.region ?? ''}
              capital={country.capital?.[0] ?? 'No Capital'}
              data={country}
            />
          );
        })}
      </div>
    </>
  );
}
