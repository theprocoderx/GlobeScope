export default function CountryDetailShimmer() {
  return (
    <div className='mx-auto mt-20 flex max-w-7xl flex-col gap-8 py-4 md:flex-row'>
      <div className='h-60 rounded-sm bg-[var(--elements-color)] md:w-1/2'></div>
      <div className='md:px8 flex-grow px-4 md:w-1/2'>
        <h1 className='h-10 rounded-sm bg-[var(--elements-color)]'></h1>
        <div className=''>
          <p className='my-2 rounded-sm bg-[var(--elements-color)] py-4'></p>
          <p className='my-2 rounded-sm bg-[var(--elements-color)] py-4'></p>
          <p className='my-2 rounded-sm bg-[var(--elements-color)] py-4'></p>
          <p className='my-2 rounded-sm bg-[var(--elements-color)] py-4'></p>
          <p className='my-2 rounded-sm bg-[var(--elements-color)] py-4 last:w-3/5'></p>
        </div>
      </div>
    </div>
  );
}
