import { createContext, useContext, useEffect, useState } from 'react';

const CountriesContext = createContext();

export function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/countries-v3.json')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      });
  }, []);

  return <CountriesContext.Provider value={{ countries, loading }}>{children}</CountriesContext.Provider>;
}

export function useCountries() {
  return useContext(CountriesContext);
}
