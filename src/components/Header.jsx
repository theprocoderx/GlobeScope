import { useTheme } from '../Contexts/ThemeContext';
export default function Header() {
  const { isDark, setIsDark } = useTheme();

  return (
    <header className={` ${isDark ? 'dark' : ''} sticky top-0 z-10 mx-auto w-full max-w-7xl p-2 shadow-lg`}>
      <div className='flex w-full max-w-7xl items-center justify-between'>
        <h2 className='w-1/2 text-2xl font-bold'>
          <a href='/' className='flex items-center gap-2'>
            <img src='/GlobeScope.webp' alt='GlobScope logo' className='h-16 w-16 rounded-4xl' />
            Globe Scope
          </a>
        </h2>

        <button onClick={() => setIsDark(!isDark)}>{isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}</button>
      </div>
    </header>
  );
}
