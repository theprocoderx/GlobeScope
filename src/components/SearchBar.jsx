export default function SearchBar({ setSearchQuery }) {
  return (
    <div className='relative h-12 w-full max-w-md overflow-hidden rounded-sm bg-[var(--elements-color)] shadow-lg'>
      <i className='fa-solid fa-magnifying-glass absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400'></i>
      <input
        className='w-full rounded-sm border-none bg-[var(--elements-color)] py-3 pr-4 pl-10 text-[var(--text-color)] placeholder-[#999] outline-none'
        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        type='text'
        placeholder='Search for a country....'
      />
    </div>
  );
}
