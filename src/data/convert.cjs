const fs = require('fs');

// v2 file read
const countries = JSON.parse(fs.readFileSync('./countries.json', 'utf8'));

const converted = countries.map((country) => {
  // currencies array -> object
  const currencies = {};
  if (country.currencies) {
    country.currencies.forEach((currency) => {
      if (currency?.code) {
        currencies[currency.code] = {
          name: currency.name || '',
          symbol: currency.symbol || '',
        };
      }
    });
  }

  // languages array -> object
  const languages = {};
  if (country.languages) {
    country.languages.forEach((lang) => {
      const key = lang.iso639_2 || lang.iso639_1 || lang.name;

      languages[key] = lang.name;
    });
  }

  return {
    name: {
      common: country.name || '',
      official: country.name || '',
    },

    cca2: country.alpha2Code || '',
    cca3: country.alpha3Code || '',
    ccn3: country.numericCode || '',

    capital: country.capital ? [country.capital] : [],

    region: country.region || '',
    subregion: country.subregion || '',

    population: country.population || 0,

    area: country.area || 0,

    latlng: country.latlng || [],

    borders: country.borders || [],

    independent: country.independent ?? true,

    flags: {
      png: country.flags?.png || '',
      svg: country.flags?.svg || '',
      alt: country.name || '',
    },

    currencies,

    languages,

    timezones: country.timezones || [],

    translations: country.translations || {},

    demonyms: {
      eng: {
        f: country.demonym || '',
        m: country.demonym || '',
      },
    },

    maps: {
      googleMaps: '',
      openStreetMaps: '',
    },
  };
});

// new file generate
fs.writeFileSync('./countries-v3.json', JSON.stringify(converted, null, 2));

console.log(`✅ Converted ${converted.length} countries`);
