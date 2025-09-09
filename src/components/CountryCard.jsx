import { Link } from 'react-router-dom';

export default function CountryCard({ name, flag, population, region, capital, data }) {
  return (
    <Link
      className='inline-block w-full overflow-hidden rounded-lg bg-[var(--elements-color)] pb-8 shadow-xl transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-md hover:outline hover:outline-gray-400'
      to={`/${name}`}
      state={data}
    >
      <div className='h-40 w-full overflow-hidden'>
        <img
          className='h-full w-full rounded-md border border-gray-300 object-cover'
          src={flag}
          loading='lazy'
          alt={name + 'Flag'}
        />
      </div>
      <div className='p-4'>
        <h3 className='text-xl font-bold'>{name}</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString('en-IN')}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </Link>
  );
}
