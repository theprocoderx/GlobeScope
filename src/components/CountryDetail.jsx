import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CountryDetailShimmer from './CountryDetailShimmer';
import { useTheme } from '../Contexts/ThemeContext';
export default function CountryDetail() {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const params = useParams();
  const { state } = useLocation();
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  function updateCountryData(data) {
    setCountryData({
      name: data.name.common || data.name,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      population: data.population,
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital,
      tld: data.tld,
      flag: data.flags.svg,
      currencies: Object.values(data.currencies || {})
        .map((currency) => currency.name)
        .join(', '),
      language: Object.values(data.languages || {}).join(', '),
      borders: [],
    });
    if (!data.borders) {
      data.borders = [];
    }
    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha?codes=${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((borders) => {
      setTimeout(() => setCountryData((prevState) => ({ ...prevState, borders })));
    });
  }

  useEffect(() => {
    const startTime = Date.now();
    if (state) {
      setTimeout(() => {
        updateCountryData(state);
        setLoading(false);
      });

      return;
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        const elapsed = Date.now() - startTime;
        const minDelay = 400; //300 - 500 is safe range

        const finish = () => {
          updateCountryData(data);
          setLoading(false);
        };

        if (elapsed < minDelay) {
          setTimeout(finish, minDelay - elapsed);
        } else {
          finish();
        }
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [countryName, state]);
  if (notFound) {
    return <div>Country not found</div>;
  }

  return (
    <>
      <main className={`mx-auto w-full max-w-7xl ${isDark ? 'dark' : ''}`}>
        <div className='mx-auto max-w-7xl text-lg sm:p-10'>
          <button
            className='ml-[1.5%] cursor-pointer rounded-lg bg-[var(--elements-color)] px-6 py-2 shadow-xl transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-md hover:outline hover:outline-gray-400'
            onClick={() => navigate(-1)}
          >
            <i className='fa-solid fa-arrow-left-long'></i>&nbsp;&nbsp;Back
          </button>

          {loading ? (
            <CountryDetailShimmer />
          ) : (
            <div className='mt-20 flex flex-col gap-8 lg:flex-row'>
              <img
                className='h-1/2 w-4/5 rounded-xl sm:w-3/5 lg:w-1/2'
                src={countryData.flag}
                alt={countryData.name}
                loading='lazy'
              />
              <div>
                <h1 className='mb-4 text-2xl font-semibold'>{countryData.name}</h1>
                <div className='flex flex-col gap-8 sm:flex-row lg:flex-row'>
                  <div className='flex flex-col gap-4'>
                    <p>
                      <b>Native Name: </b>
                      <span className='native-name'>{countryData.nativeName || countryData.name}</span>
                    </p>

                    <p>
                      <b>Population: </b>
                      <span className='population'>{countryData.population.toLocaleString('en-IN')}</span>
                    </p>
                    <p>
                      <b>Region: </b>
                      <span className='region'>{countryData.region}</span>
                    </p>
                    <p>
                      <b>Sub Region: </b>
                      <span className='sub-region'>{countryData.subRegion}</span>
                    </p>
                    <p>
                      <b>Capital: </b>
                      <span className='capital'>{countryData.capital?.join(', ')}</span>
                    </p>
                  </div>
                  <div className='flex flex-col gap-4'>
                    <p>
                      <b>Top Level Domain: </b>
                      <span className='toplevel-domain'>{countryData.tld}</span>
                    </p>
                    <p>
                      <b>Currencies: </b>
                      <span className='currencies'>{countryData.currencies}</span>
                    </p>
                    <p>
                      <b>Languages: </b>
                      <span className='languages'>{countryData.language}</span>
                    </p>
                  </div>
                </div>
                {countryData.borders.length !== 0 && (
                  <div className='flex flex-col gap-4'>
                    <div className='mt-4 text-2xl'>
                      <b>Border Countries: </b>
                    </div>
                    <div className='flex flex-wrap gap-4'>
                      {countryData.borders.map((border) => (
                        <Link
                          key={border}
                          to={`/${border}`}
                          className='cursor-pointer rounded-sm px-3 py-1 align-middle shadow-xl transition-transform duration-200 ease-in-out hover:scale-102 hover:shadow-md hover:outline hover:outline-gray-400'
                        >
                          {border}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
