import { useTheme } from '../hooks/useTheme';

export default function Header() {
  const [isDark, setIsDark] = useTheme();

  return (
    <header className={`sticky top-0 z-10 p-6 shadow-lg ${isDark ? 'dark' : ''}`}>
      <div className='mx-auto flex max-w-7xl items-center justify-between'>
        <h2 className='font-bold'>
          <a href='/'>Where is the world?</a>
        </h2>
        <p
          className='cursor-pointer rounded-sm px-2 py-1 transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-md hover:outline hover:outline-gray-400'
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem('isDarkMood', !isDark);
          }}
        >
          <i
            className={`fa-solid fa-${isDark ? 'sun' : 'moon'} ${isDark ? 'text-yellow-400' : 'text-amber-500'}`}
            id='themeIcon'
          />
          &nbsp;&nbsp;
          <span>{isDark ? 'Light' : 'Dark'} Mode</span>
        </p>
      </div>
    </header>
  );
}
