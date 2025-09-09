// import './CountriesListShimmer.css'
export default function CountriesListShimmer() {
  // const array = new Array(10).fill('')

  return (
    <div className='mx-auto mt-4 grid max-w-7xl [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))] justify-items-center gap-8'>
      {Array.from({ length: 12 }).map((el, i) => {
        return (
          <div
            key={i}
            className='max-w 7xl shimmer-card mx-auto inline-block w-full overflow-hidden rounded-lg bg-[var(--elements-color)] pb-8 shadow-xl transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-md hover:outline hover:outline-gray-400'
          >
            <div className='h-40 w-full overflow-hidden bg-[var(--shimmer-color)]'></div>
            <div className='p-4'>
              <h3 className='my-2 rounded-sm bg-[var(--shimmer-color)] py-5 text-2xl'></h3>
              <p className='my-2 rounded-sm bg-[var(--shimmer-color)] py-3'></p>
              <p className='my-2 rounded-sm bg-[var(--shimmer-color)] py-3'></p>
              <p className='my-2 rounded-sm bg-[var(--shimmer-color)] py-3 last:w-3/5'></p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
